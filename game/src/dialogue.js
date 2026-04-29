console.log("dialogue.js loaded");


const TYPING_SPEED = 1;
let dialogueLines = [];
let dialogueIndex = 0;
let charIndex = 0;
let lineFinished = false;
let inDialogue = false;


function startDialogue(lines, onEnd = null) {
  dialogueLines = lines;
  dialogueIndex = 0;
  charIndex     = 0;
  inDialogue    = true;
  lineFinished  = false;
  dialogueOnEnd = onEnd;
}


function updateDialogue() {
  if (!inDialogue || lineFinished) return;
  charIndex++;
  if (charIndex >= dialogueLines[dialogueIndex].text.length) {
    lineFinished = true;
  }
}


function advanceDialogue() {
  if (!inDialogue) return;
  if (!lineFinished) {
    charIndex    = dialogueLines[dialogueIndex].text.length;
    lineFinished = true;
  } else if (dialogueIndex < dialogueLines.length - 1) {
    dialogueIndex++;
    charIndex    = 0;
    lineFinished = false;
  } else {
    inDialogue = false;
    if (dialogueOnEnd) dialogueOnEnd(); // call it when dialogue ends
  }
}

function drawDialogueBox(bx = 20, by = 430, bw = 760, bh = 140) {
  if (!inDialogue) return;

  let line = dialogueLines[dialogueIndex];
  let ctx = drawingContext;

  ctx.save();

  ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  ctx.lineWidth = 1;
  ctx.fillRect(bx, by, bw, bh);

  ctx.fillStyle = "white";
  ctx.font = "bold 14px Georgia";
  ctx.fillText(line.name, bx + 20, by + 30);

  ctx.font = "15px Georgia";
  ctx.fillStyle = "white";
  drawWrappedText(ctx, line.text.substring(0, charIndex), bx + 20, by + 62, bw - 40, 26);

  if (lineFinished && frameCount % 60 < 30) {
    ctx.fillText("▼", bx + bw - 28, by + bh - 12);
  }

  ctx.restore();
}


function drawWrappedText(ctx, txt, x, y, maxWidth, lineHeight) {
  let words = txt.split(' ');
  let currentLine = '';
  for (let word of words) {
    let testLine = currentLine + word + ' ';
    if (ctx.measureText(testLine).width > maxWidth && currentLine !== '') {
      ctx.fillText(currentLine.trim(), x, y);
      currentLine = word + ' ';
      y += lineHeight;
    } else {
      currentLine = testLine;
    }
  }
  ctx.fillText(currentLine.trim(), x, y);
}


///// APRIL 5TH, SO TIRED!
///// RESPONSE SYSTEM

let inChoice      = false;
let choiceOptions = [];

function showChoice(options) {
  inChoice      = true;
  choiceOptions = options;
}

function drawChoiceBox() {
  if (!inChoice) return;

  let ctx = drawingContext;
  ctx.save();

  for (let i = 0; i < choiceOptions.length; i++) {
    let bw = 200;
    let bh = 36;
    let bx = 800 / 2 - bw / 2;
    let by = 390 - (choiceOptions.length - i) * (bh + 8);

    ctx.fillStyle   = "rgba(0, 0, 0, 0.85)";

    ctx.fillRect(bx, by, bw, bh);
    ctx.strokeRect(bx, by, bw, bh);

    ctx.fillStyle = "white";
    ctx.font      = "13px Georgia";
    ctx.textAlign = "center";
    ctx.fillText(choiceOptions[i].text, bx + bw / 2, by + bh / 2 + 5);
  }

  ctx.restore();
}

function handleChoiceClick(mx, my) {
  if (!inChoice) return false;

  for (let i = 0; i < choiceOptions.length; i++) {
    let bw = 200;
    let bh = 36;
    let bx = 800 / 2 - bw / 2;
    let by = 390 - (choiceOptions.length - i) * (bh + 8);

    if (mx > bx && mx < bx + bw && my > by && my < by + bh) {
      inChoice = false;
      choiceOptions[i].onChoose();
      return true;
    }
  }
  return false;
}