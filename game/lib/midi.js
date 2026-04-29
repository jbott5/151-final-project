// ============================================================
// midi.js — Web MIDI Helper
// ============================================================
// This file handles all the Web MIDI plumbing so that sketch.js
// can simply read three global variables: on, note, vel.
//
// HOW MIDI MESSAGES WORK:
// Every MIDI message has 3 bytes (numbers):
//   Byte 1 — "status byte" (what kind of message?)
//     144 = note ON  (a key was pressed)
//     128 = note OFF (a key was released)
//     176 = control change (a knob or slider moved)
//     224 = pitch bend

//   Byte 2 — "note number" or "controller number"
//     For notes: 60 = Middle C, 62 = D, 64 = E, etc.
//     For knobs: each knob has its own number (e.g. 14, 15, 16...)

//   Byte 3 — "velocity" or "value" (0–127)
//     For notes: how hard the key was pressed (0 = off, 127 = max)
//     For knobs: the knob's current position (0–127)
//
// SPECIFIC TO THE CLASSROOM CONTROLLER:
//   on 176: k1-k4 are knobs, midi notes 14-17, velocity 0-127
//   on 144: P1-P4 are pads (notes 36, 37, 38, 39)
//   on 224: PB = pitch bend
//   on 176: Mod, Sus = modulation and sustain
//   on 144: keyboard keys (C=60, D=62, E=64, F=65, G=67, A=69, B=71)
// ============================================================

// These three global variables are updated every time a MIDI
// message arrives. Your sketch.js can read them at any time.
let on = 0;     // status byte: what type of message (144, 128, 176, etc.)
let note = 0;   // note number or controller number (0–127)
let vel = 0;    // velocity or value (0–127)

// We also keep a list of which notes are currently held down.
// This lets us do things like play chords or show multiple notes.
let activeNotes = [];  // array of { note: number, vel: number }

// ----------------------------------------------------------
// Step 1: Check if this browser supports Web MIDI
// ----------------------------------------------------------
// Web MIDI is built into Chrome and Edge. Safari and Firefox
// may need a polyfill or flag enabled.
if (navigator.requestMIDIAccess) {
  console.log("This browser supports Web MIDI!");
} else {
  console.log("Web MIDI is NOT supported in this browser. Try Chrome.");
}

// ----------------------------------------------------------
// Step 2: Request access to MIDI devices
// ----------------------------------------------------------
// This returns a "promise" — it will either succeed or fail.
// If it succeeds, we call onMIDISuccess.
// If it fails (no devices, permission denied), we call onMIDIFailure.
navigator.requestMIDIAccess()
  .then(onMIDISuccess, onMIDIFailure);

// ----------------------------------------------------------
// Step 3: On success, listen to all connected MIDI inputs
// ----------------------------------------------------------
function onMIDISuccess(midiAccess) {
  // midiAccess.inputs is a Map of all connected MIDI input devices
  // (keyboards, drum pads, knob controllers, etc.)
  for (let input of midiAccess.inputs.values()) {
    // For each device, set up a callback that fires every time
    // a MIDI message comes in from that device
    input.onmidimessage = getMIDIMessage;
    console.log("Connected MIDI device:", input.name);
  }

  // Also listen for devices that get plugged in/unplugged AFTER
  // the page loads (hot-plugging). Without this, students who
  // plug in their keyboard after opening the page would need
  // to refresh.
  midiAccess.onstatechange = function (event) {
    if (event.port.type === "input") {
      if (event.port.state === "connected") {
        event.port.onmidimessage = getMIDIMessage;
        console.log("New MIDI device connected:", event.port.name);
      } else {
        console.log("MIDI device disconnected:", event.port.name);
      }
    }
  };
}

// ----------------------------------------------------------
// Step 4: Handle failure
// ----------------------------------------------------------
function onMIDIFailure() {
  console.log("Could not access your MIDI devices.");
}

// ----------------------------------------------------------
// Step 5: Process each incoming MIDI message
// ----------------------------------------------------------
function getMIDIMessage(midiMessage) {
  // Update the three global variables that sketch.js reads
  on   = midiMessage.data[0];  // status byte
  note = midiMessage.data[1];  // note/controller number
  vel  = midiMessage.data[2];  // velocity/value

  // Track which notes are currently held down
  if (on === 144 && vel > 0) {
    // Note ON — add to our active notes list
    // (first remove it if already there, to avoid duplicates)
    activeNotes = activeNotes.filter(n => n.note !== note);
    activeNotes.push({ note: note, vel: vel });
  } else if (on === 128 || (on === 144 && vel === 0)) {
    // Note OFF — some keyboards send 128, others send 144 with vel=0
    activeNotes = activeNotes.filter(n => n.note !== note);
  }

  // Print to the console for debugging
  // Open DevTools (Cmd+Option+I on Mac) > Console tab to see these
  console.log("MIDI:", on, note, vel);
}
