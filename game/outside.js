let tootsImg;
let tootsX = 1100;
let tootsY = 60;
let tootsW = 90;
let tootsH = 140;

function preload() {
  tootsImg = loadImage('assets/img/toots.png');
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('background', 'transparent');
  frameRate(60);
}

let overToots = false;

function draw() {
  clear();
  image(tootsImg, tootsX, tootsY, tootsW, tootsH);
  updateDialogue();
  drawDialogueBox(20, 200, 600, 150);
}

function mouseMoved() {
  overToots = mouseX > tootsX && mouseX < tootsX + tootsW &&
              mouseY > tootsY && mouseY < tootsY + tootsH;

  let iframe = window.frameElement;
  if (iframe) {
    iframe.style.pointerEvents = (overToots || inDialogue) ? "all" : "none";
  }
}

function mousePressed() {
  if (overToots) {
    startDialogue(TOOTS_DIALOGUE);
  }
  if (inDialogue) advanceDialogue();
}