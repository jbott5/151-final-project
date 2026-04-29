console.log("scene.js has loaded!");


let FLAGS = {
    piano_played: false,
    eye_talked: false,



    talkedToPlushie: false,
    talkedToDog: false,

    talkedToClown: false,
    talkedToClownAgain: false,

    solvedPuzzle: false,

};


let currentScene;
let sneakOne;
let sneakTwo;
let SCENES;

let transitioning = false;
let transitionAlpha = 0;
let transitionDirection = "out";
let snapshotImg = null;

function initScenes() {
    currentScene = SCENES.intro;
}

function preloadScenes() {
    let puzzleSong = null;

    cursorEye = loadImage('assets/img/eye.png');
    cursorMouth = loadImage('assets/img/mouth.png');
    flippyImg = loadImage('assets/img/flippy.png');
    oceanImg = loadImage('assets/img/ocean.png');
    denImg = loadImage('assets/img/den.png')
    doorImg = loadImage('assets/img/door.png')
    warningImg = loadImage('assets/img/warning.png')
    entrance0_Img = loadImage('assets/img/entrance_zero.png')
    entrance1_Img = loadImage('assets/img/entrance_one.png')
    entrance2_Img = loadImage('assets/img/entrance_two.png')
    ocean_oneImg = loadImage('assets/img/ocean_one.png')
    ocean_twoImg = loadImage('assets/img/ocean_two.png')
    ocean_middleImg = loadImage('assets/img/ocean_middle.png')
    eyeball_backgroundImg = loadImage('assets/img/eyeball_background.png')
    clicktobeginImg = loadImage('assets/img/clicktostart.png')
    eyewallImg = loadImage('assets/img/eye_wall.png')
    technoopenImg = loadImage('assets/img/techno_open.png')
    technocenterImg = loadImage('assets/img/techno_first.png')
    planetImg = loadImage('assets/img/planet_atea.png')
    evilTowerFarImg = loadImage('assets/img/evil_tower_far.png')
    evilTowerCloseImg = loadImage('assets/img/evil_tower_close.png')
    clownworldImg = loadImage('assets/img/clown_world.png')
    emptyOneImg = loadImage('assets/img/empty1.png')
    emptyTwoImg = loadImage('assets/img/empty2.png')
    emptyThreeImg = loadImage('assets/img/empty3.png')

    SCENES = {
        //////////////////////////////// GAME!!!!!!
        ending1: {
            background: emptyOneImg,
            song: null,
            hitboxes: [
                {
                    id: "anywhere",
                    x: 0, y: 0, w: 200, h: 600,
                    debug: false,
                    onClick() {
                        goToScene("ending2");
                    }
                },
                {
                    id: "anywhere",
                    x: 600, y: 0, w: 200, h: 600,
                    debug: false,
                    onClick() {
                        goToScene("ending3");
                    }
                }
            ]
        },



        ending2: {
            background: emptyTwoImg,
            song: null,
            hitboxes: [
                {
                    id: "anywhere",
                    x: 0, y: 400, w: 800, h: 200,
                    debug: false,
                    onClick() {
                        goToScene("ending1");
                    }
                }
            ]
        },

        ending3: {
            background: emptyThreeImg,
            song: null,
            hitboxes: [
                {
                    id: "anywhere",
                    x: 0, y: 400, w: 800, h: 200,
                    debug: false,
                    onClick() {
                        goToScene("ending1");
                    }
                }
            ]
        },

        titlescene: {
            background: emptyThreeImg,
            song: menuSong,
            hitboxes: [
                {
                    id: "anywhere",
                    x: 0, y: 0, w: 800, h: 600,
                    debug: false,
                    onClick() {
                        goToScene("intro");
                    }
                }
            ]
        },

        clown_world: {
            background: clownworldImg,
            song: clownSong,
            hitboxes: [
                {
                    id: "dooclown ",
                    x: 520, y: 420, w: 100, h: 160,
                    debug: false,
                    onClick() {
                        if (FLAGS.talkedToClown == false) {
                            FLAGS.talkedToClown = true;
                            startDialogue(CLOWN_DIALOGUE_ONE);
                        }
                        else if (FLAGS.talkedToClownAgain == true) {
                            startDialogue(CLOWN_DIALOGUE_THREE);
                        }
                        else {
                            FLAGS.talkedToClownAgain = true;
                            startDialogue(CLOWN_DIALOGUE_TWO);
                        }
                    }
                },
                {
                    id: "door",
                    x: 0, y: 0, w: 200, h: 800,
                    debug: false,
                    onClick() {
                        goToScene("techno_center");
                    }
                },
                {
                    id: "door",
                    x: 600, y: 0, w: 200, h: 800,
                    debug: false,
                    onClick() {
                        goToScene("eviltowerfar");
                    }
                }
            ]
        },

        eviltowerfar: {
            background: evilTowerFarImg,
            song: towerSong,
            hitboxes: [
                {
                    id: "door",
                    x: 400, y: 320, w: 50, h: 80,
                    debug: false,
                    onClick() {
                        goToScene("eviltowerclose");
                    }
                },

                {
                    id: "door",
                    x: 0, y: 400, w: 800, h: 200,
                    debug: false,
                    onClick() {
                        goToScene("clown_world");
                    }
                },
            ]
        },

        eviltowerclose: {
            background: evilTowerCloseImg,
            song: null,
            hitboxes: [
                {
                    id: "door",
                    x: 330, y: 180, w: 200, h: 260,
                    debug: true,
                    onClick() {
                        startDialogue(DOOR_LOCKED);
                    }
                }
            ]
        },


        intro: {
            background: eyeball_backgroundImg,
            song: null,
            hitboxes: [
                {
                    id: "anywhere",
                    x: 0, y: 0, w: 800, h: 600,
                    debug: false,
                    onClick() {
                        console.log("clicked!");
                        startDialogue(INTRO_DIALOGUE, () => {
                            goToScene("entrance_0");
                        });
                    }
                }
            ]
        },

        entrance_0: {
            background: entrance0_Img,
            song: menuSong,
            hitboxes: [
                {
                    id: "anywhere",
                    x: 0, y: 0, w: 800, h: 600,
                    debug: false,
                    onClick() {
                        goToScene("entrance_1");
                    }
                }
            ]
        },



        entrance_1: {
            background: entrance1_Img,
            song: null,
            hitboxes: [
                {
                    id: "anywhere",
                    x: 0, y: 0, w: 800, h: 600,
                    debug: false,
                    onClick() {
                        goToScene("entrance_2");
                    }
                }
            ]
        },

        entrance_2: {
            background: entrance2_Img,
            song: null,
            hitboxes: [
                {
                    id: "anywhere",
                    x: 0, y: 0, w: 800, h: 600,
                    debug: false,
                    onClick() {
                        goToScene("ocean_middle");
                    }
                }
            ]
        },

        ocean_middle: {
            background: ocean_middleImg,
            song: lostSong,
            hitboxes: [

                {
                    id: "door",
                    x: 0, y: 0, w: 150, h: 800,
                    debug: false,
                    onClick() {
                        goToScene("ocean_two");
                    }
                },

                {
                    id: "door",
                    x: 0, y: 400, w: 600, h: 800,
                    debug: false,
                    onClick() {
                        goToScene("planet");
                    }
                },

                {
                    id: "door",
                    x: 650, y: 0, w: 200, h: 800,
                    debug: false,
                    onClick() {
                        goToScene("ocean_one");
                    }
                },
            ]
        },

        ocean_one: {
            background: ocean_oneImg,
            song: puzzleSong,
            hitboxes: [
                {
                    id: "door",
                    x: 0, y: 0, w: 200, h: 600,
                    debug: false,
                    onClick() {
                        goToScene("ocean_middle");
                    }
                },

                {
                    id: "eye",
                    x: 400, y: 250, w: 200, h: 300,
                    debug: false,
                    onClick() {
                        if (FLAGS.solvedPuzzle) {
                            playSong(solvedSong);
                            startDialogue(EYE_DIALOGUE_ONE_SOLVED, () => {
                                goToScene("ocean_one");
                            });
                        } else {
                            startDialogue(EYE_DIALOGUE_DIALOGUE);
                        }
                    }
                }
            ]
        },

        ocean_two: {
            background: ocean_twoImg,
            song: puzzleSong,
            hitboxes: [
                {
                    id: "door",
                    x: 700, y: 0, w: 800, h: 600,
                    debug: false,
                    onClick() {
                        goToScene("ocean_middle");
                    }
                },

                {
                    id: "monkey",
                    x: 100, y: 200, w: 200, h: 200,
                    debug: false,
                    onClick() {
                        startDialogue(PLUSHIE_DIALOGUE);
                    }
                },


                {
                    id: "weird_ball",
                    x: 500, y: 300, w: 200, h: 200,
                    debug: false,
                    onClick() {
                        startDialogue([
                            { name: "thomas", text: "oh no." },
                            { name: "thomas", text: "oh no no no no no." },
                            { name: "thomas", text: "you're an outsider. do you have any idea what happens when an outsider shows up here?" },
                            { name: "thomas", text: "...I don't know!" },
                            { name: "thomas", text: "but word is, last time one of yous appeared, half this place just ceased to exist." },
                            { name: "thomas", text: "Real administrative nightmare, I imagine, probably not great for the economy." },
                            { name: "thomas", text: "It might just be a story to freak people out, we get bored around here and make up stuff, but I don't wanna find out." },
                        ]);
                    }
                }
            ]
        },

        techno_eye: {
            background: eyewallImg,
            song: null,
            hitboxes: [
                {
                    id: "door",
                    x: 0, y: 450, w: 800, h: 800,
                    debug: false,
                    onClick() {
                        goToScene("techno_open");
                    }
                },

                {
                    id: "eye_creature",
                    x: 300, y: 280, w: 300, h: 150,
                    debug: false,
                    onClick() {
                        console.log("hello")
                        showChoice([
                            {
                                text: "What's the karmic circle?",
                                onChoose() {
                                    startDialogue([
                                        {
                                            name: "Strange eye-creature",
                                            text: "The karmic circle is the endless turning of life, death, and rebirth. Every soul is bound to it. Here, spirits linger between those cycles, awaiting the moment they are born again."
                                        }
                                    ]);
                                }
                            },
                            {
                                text: "Where am I?",
                                onChoose() {
                                    startDialogue([
                                        {
                                            name: "Strange eye-creature",
                                            text: "You are within O-NE — a realm where form and memory merge, then slowly decay as one. The beings you encounter here are souls, suspended in the karmic cycle."
                                        }
                                    ]);
                                }
                            },
                        ]);
                    }
                },
            ]
        },

        techno_open: {
            background: technoopenImg,
            song: null,
            hitboxes: [
                {
                    id: "back",
                    x: 0, y: 350, w: 800, h: 800,
                    debug: false,
                    onClick() {
                        goToScene("techno_center");
                    }
                },

                {
                    id: "dog",
                    x: 420, y: 240, w: 220, h: 60,
                    debug: false,
                    onClick() {
                        goToScene("techno_eye");

                    }
                },
            ]
        },

        techno_center: {
            background: technocenterImg,
            song: eyeSong,
            hitboxes: [
                {
                    id: "door",
                    x: 0, y: 0, w: 300, h: 800,
                    debug: false,
                    onClick() {
                        goToScene("techno_open");
                    }
                },

                {
                    id: "door",
                    x: 400, y: 0, w: 300, h: 250,
                    debug: false,
                    onClick() {
                        goToScene("ocean_middle");
                    }
                },

                {
                    id: "dog",
                    x: 500, y: 300, w: 250, h: 300,
                    debug: false,
                    onClick() {
                        startDialogue(KATHERINE_DIALOGUE);
                    }
                },
            ]
        },

        planet: {
            background: planetImg,
            song: null,
            hitboxes: [
                {
                    id: "girl",
                    x: 570, y: 300, w: 150, h: 270,
                    debug: false,
                    onClick() {
                        startDialogue(GIRL_DIALOGUE);
                    }
                },

                {
                    id: "DOOR",
                    x: 0, y: 0, w: 200, h: 800,
                    debug: false,
                    onClick() {
                        goToScene("clown_world");
                    }
                },
            ]
        },



        /////////////////////////////////////////////////////////////////////////

        doorscene: {
            background: doorImg,
            song: null,
            hitboxes: [
                {
                    id: "anywhere",
                    x: 350, y: 200, w: 125, h: 150,
                    debug: false,
                    onClick() {
                        console.log("clicked!");
                        goToScene("startscene");
                    }
                }
            ]
        },

        openingscene: {
            background: oceanImg,
            song: menuSong,
            hitboxes: [
                {
                    id: "door",
                    x: 0, y: 0, w: 800, h: 600,
                    debug: false,
                    onClick() {
                        console.log("clicked!");
                        startDialogue(NARRATOR_DIALOGUE, () => {
                            goToScene("doorscene");
                        });
                    }
                }
            ]
        },

        startscene: {
            background: flippyImg,
            song: melSong,
            hitboxes: [
                {
                    id: "flippy",
                    x: 300, y: 310, w: 140, h: 140,
                    debug: false,
                    onClick() {
                        console.log("clicked flippy!");
                        startDialogue(KEYBOARD_DIALOGUE, () => {
                            goToScene("entrance_0");
                        });
                    }
                },

                {
                    id: "door",
                    x: 0, y: 0, w: 150, h: 800,
                    debug: false,
                    onClick() {
                        console.log("clicked flippy!");
                        startDialogue(KEYBOARD_DIALOGUE, () => {
                            goToScene("entrance_0");
                        });
                    }
                },

                {
                    id: "door_two",
                    x: 650, y: 0, w: 200, h: 800,
                    debug: false,
                    onClick() {
                        console.log("clicked flippy!");
                        startDialogue(KEYBOARD_DIALOGUE, () => {
                            goToScene("entrance_0");
                        });
                    }
                },


            ]
        },

        the_door: {
            background: doorImg,
            song: null,
            hitboxes: [
                {
                    id: "anywhere",
                    x: 350, y: 200, w: 125, h: 150,
                    debug: false,
                    onClick() {
                        console.log("clicked!");
                        goToScene("startscene");
                    }
                }
            ]
        },

        weirdoArea: {
            background: denImg,
            song: lostSong,
            hitboxes: [
                {
                    id: "plushie",
                    x: 330, y: 325, w: 100, h: 100,
                    debug: true,
                    onClick() {
                        startDialogue(PLUSHIE_DIALOGUE_INTRO, () => {
                            showChoice([
                                {
                                    text: "yes",
                                    onChoose() {
                                        startDialogue(PLUSHIE_DIALOGUE_YES);
                                    }
                                },
                                {
                                    text: "no",
                                    onChoose() {
                                        startDialogue(PLUSHIE_DIALOGUE_NO);
                                    }
                                }
                            ]);
                        });
                    }
                },

                {
                    id: "bird",
                    x: 25, y: 275, w: 150, h: 200,
                    debug: true,
                    onClick() {
                        console.log("clicked stranger!");
                        startDialogue(BIRD_DIALOGUE);
                    }
                },

                {
                    id: "dog",
                    x: 500, y: 320, w: 150, h: 280,
                    debug: true,
                    onClick() {
                        if (FLAGS.talkedToDog && FLAGS.talkedToPlushie) {
                            startDialogue(DOG_DIALOGUE_3);
                        }
                        else if (FLAGS.talkedToDog) {
                            startDialogue(DOG_DIALOGUE_2);
                        } else {
                            startDialogue(DOG_DIALOGUE, () => {
                                FLAGS.talkedToDog = true;
                            });
                        }
                    }
                },

            ]
        },

    };
}



function goToScene(name) {
    startTransition();
    currentScene = SCENES[name];
    if (currentScene.song) {
        playSong(currentScene.song);
    }
}

function initEnding1() {
    currentScene = SCENES.ending1;
}

function startTransition() {
    snapshotImg = get(); // grabs current canvas before scene switches
    transitioning = true;
    transitionAlpha = 0;
    transitionDirection = "out";
}
function drawTransition() {
    if (!transitioning) return;

    if (transitionDirection === "out") {
        transitionAlpha += 5;

        // draw the snapshot with a darkening overlay
        image(snapshotImg, 0, 0, 800, 600);
        let ctx = drawingContext;
        ctx.save();
        ctx.fillStyle = `rgba(0, 0, 0, ${transitionAlpha / 255})`;
        ctx.fillRect(0, 0, 800, 600);
        ctx.restore();

        if (transitionAlpha >= 255) {
            transitionAlpha = 255;
            transitionDirection = "in";
        }
    } else {
        transitionAlpha -= 5;
        let ctx = drawingContext;
        ctx.save();
        ctx.fillStyle = `rgba(0, 0, 0, ${transitionAlpha / 255})`;
        ctx.fillRect(0, 0, 800, 600);
        ctx.restore();

        if (transitionAlpha <= 0) {
            transitionAlpha = 0;
            transitioning = false;
            snapshotImg = null;
        }
    }
}


function loadScene() {
    image(currentScene.background, 0, 0, 800, 600);



    for (let box of currentScene.hitboxes) {
        if (box.debug) {
            noFill();
            stroke(255, 0, 0);
            strokeWeight(1);
            rect(box.x, box.y, box.w, box.h);
        }
    }
}

function handleSceneClick(mx, my) {
    for (let box of currentScene.hitboxes) {
        if (mx > box.x && mx < box.x + box.w &&
            my > box.y && my < box.y + box.h) {
            box.onClick();
            return;
        }
    }
}

function drawCursor() {
    let img = cursorEye; // default

    // check if mouse is over any hitbox in the current scene
    for (let box of currentScene.hitboxes) {
        if (mouseX > box.x && mouseX < box.x + box.w &&
            mouseY > box.y && mouseY < box.y + box.h) {
            img = cursorMouth;
            break;
        }
    }

    noCursor(); // hide the default cursor
    image(img, mouseX - 15, mouseY - 15, 40, 30); // centered on cursor
}


