document.addEventListener("DOMContentLoaded", () => {
  const audios = [];

  const Clock = document.getElementById('clock');
  const clockAudio = new Audio('./public/music/drumsv2.wav');

  const Flower = document.getElementById('flower-pot');
  const flowerAudio = new Audio('./public/music/piano7sec.wav');

  const Chair = document.getElementById('chair');
  const chairAudio = new Audio('./public/music/elec_guitar.wav');

  const Board = document.getElementById('board-game');
  const boardAudio = new Audio('./public/music/bass.wav');

  const Lamp = document.getElementById('lamp');
  const lampAudio = new Audio('./public/music/flutev2.wav');

  const stopPlaying = (audio) => {
    audio.pause();
    audio.currentTime = 0;
  }

  const playAudios = () => {
    for (let i = 0; i < audios.length; i++) {
      audios[i].play();

      audios[i].addEventListener('ended', () => {
        playAudios();
      });
    }
  }
  
  Clock.addEventListener('click', () => {
    const index = audios.indexOf(clockAudio);

    if (index > -1) {
      audios.splice(index, 1);
      stopPlaying(clockAudio);
      return;
    }

    if (audios.length === 0) {
      audios.push(clockAudio);
      playAudios();
    } else {
      audios.push(clockAudio);
    }

  });

  Flower.addEventListener('click', () => {
    const index = audios.indexOf(flowerAudio);

    if (index > -1) {
      audios.splice(index, 1);
      stopPlaying(flowerAudio)
      return;
    }

    if (audios.length === 0) {
      audios.push(flowerAudio);
      playAudios();
    } else {
      audios.push(flowerAudio);
    }

  });
  
  Chair.addEventListener('click', () => {
    const index = audios.indexOf(chairAudio);

    if (index > -1) {
      audios.splice(index, 1);
      stopPlaying(chairAudio)
      return;
    }

    if (audios.length === 0) {
      audios.push(chairAudio);
      playAudios();
    } else {
      audios.push(chairAudio);
    }

  });

  Board.addEventListener('click', () => {
    const index = audios.indexOf(boardAudio);

    if (index > -1) {
      audios.splice(index, 1);
      stopPlaying(boardAudio)
      return;
    }

    if (audios.length === 0) {
      audios.push(boardAudio);
      playAudios();
    } else {
      audios.push(boardAudio);
    }

  });

  Lamp.addEventListener('click', () => {
    const index = audios.indexOf(lampAudio);

    if (index > -1) {
      audios.splice(index, 1);
      stopPlaying(lampAudio)
      return;
    }

    if (audios.length === 0) {
      audios.push(lampAudio);
      playAudios();
    } else {
      audios.push(lampAudio);
    }

  });
});

