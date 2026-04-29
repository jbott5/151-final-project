let song;   
let menuSong;
let lostSong;

function preloadSongs() {
    menuSong = loadSound('assets/sounds/menu.mp3');
    lostSong = loadSound('assets/sounds/lost.mp3');
    melSong = loadSound('assets/sounds/mel.mp3');
    
    clownSong = loadSound('assets/sounds/clown.mp3');
    solvedSong = loadSound('assets/sounds/solved.mp3');
    eyeSong = loadSound('assets/sounds/eye.mp3');
    towerSong = loadSound('assets/sounds/tower.mp3');

    endingSong = loadSound('assets/sounds/gongs.mp3')
}

function playSong(newSong) {
  if (song && song.isPlaying()) {
    song.stop(); // stop the current song
  }
  song = newSong;
  song.play();
}