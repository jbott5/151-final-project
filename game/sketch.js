let pianoOsc;
let pianoEnv;
let pianoOsc2;

function setupPiano() {
  pianoEnv = new p5.Envelope();
  pianoEnv.setADSR(0.01, 0.3, 0.1, 0.8);
  pianoEnv.setRange(0.4, 0);

  pianoOsc = new p5.Oscillator("sawtooth");
  pianoOsc.start();
  pianoOsc.amp(pianoEnv);

  pianoOsc2 = new p5.Oscillator("sine");
  pianoOsc2.start();
  pianoOsc2.amp(pianoEnv);
}

function playPianoNote(midiNote) {
  if (midiNote < 48 || midiNote > 72) return;
  let freq = midiToFreq(midiNote);
  pianoOsc.freq(freq);
  pianoOsc2.freq(freq * 1.008);
  pianoEnv.play();
}

function preload() {
  preloadSongs();
  preloadScenes();
}

function setup() {
  createCanvas(800, 600);
  let ending = Number(localStorage.getItem("ending")) || 0;
  
  if (ending === 1) {
    initEnding1();
  } else {
    initScenes();
  }
  
  setupPiano();
}
let lastNote = -1;
let notesPlayed = 0;

function draw() {
  loadScene();
  updateDialogue();
  drawDialogueBox();
  drawChoiceBox();
  drawTransition();
  drawCursor();

  if (typeof activeNotes !== "undefined" && activeNotes.length > 0) {
    let latest = activeNotes[activeNotes.length - 1];
    if (latest.note !== lastNote) {
      lastNote = latest.note;
      playPianoNote(latest.note);

      if (!FLAGS.solvedPuzzle) {
        notesPlayed++;
        if (notesPlayed >= 30) {
          FLAGS.solvedPuzzle = true;
        }
      }
    }
  } else {
    lastNote = -1;
  }
}

function mousePressed() {
  if (transitioning) return;
  if (handleChoiceClick(mouseX, mouseY)) return;
  if (inDialogue) {
    advanceDialogue();
  } else {
    handleSceneClick(mouseX, mouseY);
  }
}

function keyPressed() {
  if (inDialogue && key === ' ') {
    advanceDialogue();
  }
}