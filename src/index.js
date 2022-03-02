
document.addEventListener("DOMContentLoaded", () => {

  //timer bar
  // const timerBar = document.getElementById("timer-bar")



  //sliders

  const clockSlider = document.getElementById('clock-slider');
  const flowerSlider = document.getElementById('flower-slider');
  const chairSlider = document.getElementById('chair-slider');
  const boardSlider = document.getElementById('board-slider');
  const lampSlider = document.getElementById('lamp-slider');

  let clockRange = document.getElementById('clock-range');
  let flowerRange = document.getElementById('flower-range');
  let chairRange = document.getElementById('chair-range');
  let boardRange = document.getElementById('board-range');
  let lampRange = document.getElementById('lamp-range');

  let clockVolume = document.getElementById('clock-volume');
  let flowerVolume = document.getElementById('flower-volume');
  let chairVolume = document.getElementById('chair-volume');
  let boardVolume = document.getElementById('board-volume');
  let lampVolume = document.getElementById('lamp-volume');
     
  clockVolume.innerHTML = clockRange.value;
  flowerVolume.innerHTML = flowerRange.value;
  chairVolume.innerHTML = chairRange.value;
  boardVolume.innerHTML = boardRange.value;
  lampVolume.innerHTML = lampRange.value;

   const createVolumeSlide = (audio, objVolume, range) => {
    let val = range.value;
    let color = 'linear-gradient(90deg, rgb(117, 252, 117)' + val + '%, rgb(214, 214, 214)' + val + '%)';
    range.style.background = color;
    let newVol = objVolume.innerHTML / 100;
    audio.volume = newVol;
  }
  
  //audios
  const audios = [];
  
  const Clock = document.getElementById('clock');
  const clockAudio = new Audio('./public/music/rock_room_beats/rock_hat2.wav');

  const Flower = document.getElementById('flower-pot');
  const flowerAudio = new Audio('./public/music/rock_room_beats/rock_kik.wav');

  const Chair = document.getElementById('chair');
  const chairAudio = new Audio('./public/music/rock_room_beats/rock_pads.wav');
  
  const Board = document.getElementById('board-game');
  const boardAudio = new Audio('./public/music/rock_room_beats/rock_synth2.wav');

  const Lamp = document.getElementById('lamp');
  const lampAudio = new Audio('./public/music/rock_room_beats/rock_snare.wav');
  
  const stopPlaying = (audio) => {
    audio.pause();
    audio.currentTime = 0;
  }

  // const toggleProgressBar = () => {
  //   if (audios.length > 0 && !timerBar.classList.contains('play-animation')) {
  //     timerBar.classList.add('play-animation');
  //     return;
      
  //   } else if (audios.length > 0 && timerBar.classList.contains('play-animation')) {
  //     return;
  //   } else if (audios.length === 0) {
  //     timerBar.classList.remove('play-animation');
  //     return;
  //   }
  // }
  
  const playAudios = () => {
    // toggleProgressBar();

    for (let i = 0; i < audios.length; i++) {
      const ele = audios[i]; // {audio: flowerAudio, slider: flowerSlider}
      const audio = ele.audio;
      const slider = ele.slider;
      const objVolume = ele.objVolume;
      const range = ele.range;
      audio.play();

      range.oninput = function() {
        // console.log(this);
        objVolume.innerHTML = this.value;
      }

      slider.style.display = "block";
      range.addEventListener("input", createVolumeSlide.bind(null, audio, objVolume, range));
      audio.addEventListener('ended', () => {
        playAudios();
      });
    }
  }

  const isInAudiosArr = (audio) => {
    for (let i = 0; i < audios.length; i++) {
      if (audios[i].audio === audio) return true;
    }
    return false;
  }

  // const isPlaying = () => {
  //  if (audios.length === 0) {
  //    if (timerBar.hasAttribute('play-animation')) {
  //      timerBar.removeAttribute('play-animation');
  //    }
  //  } else {
  //    animateBar();
  //  }
  // }

  ///////////

  
  Clock.addEventListener('click', () => {
    const clockAudioObj = {audio: clockAudio, slider: clockSlider, objVolume: clockVolume, range: clockRange};
    // const index = audios.indexOf(clockAudioObj);

    if (isInAudiosArr(clockAudioObj.audio)) {
      audios.splice(clockAudioObj, 1);
      stopPlaying(clockAudio);
      clockSlider.style.display = "none";
      return;
    }

    if (audios.length === 0) {
      audios.push(clockAudioObj);
      playAudios();
    } else {
      audios.push(clockAudioObj);
    }
  });

  Flower.addEventListener('click', () => {
    const flowerAudioObj = {audio: flowerAudio, slider: flowerSlider, objVolume: flowerVolume, range: flowerRange};

    if (isInAudiosArr(flowerAudioObj.audio)) {
      audios.splice(flowerAudioObj, 1);
      stopPlaying(flowerAudioObj.audio)
      flowerSlider.style.display = "none";
      return;
    }

    if (audios.length === 0) {
      audios.push(flowerAudioObj);
      playAudios();
    } else {
      audios.push(flowerAudioObj);
    }
  });
  
  Chair.addEventListener('click', () => {
    const chairAudioObj = {audio: chairAudio, slider: chairSlider, objVolume: chairVolume, range: chairRange};
    // const index = audios.indexOf(chairAudioObj);

    if (isInAudiosArr(chairAudioObj.audio)) {
      audios.splice(chairAudioObj, 1);
      stopPlaying(chairAudio);
      chairSlider.style.display = "none";
      return;
    }

    if (audios.length === 0) {
      audios.push(chairAudioObj);
      playAudios();
    } else {
      audios.push(chairAudioObj);
    }
  });

  Board.addEventListener('click', () => {
    const boardAudioObj = {audio: boardAudio, slider: boardSlider, objVolume: boardVolume, range: boardRange};

    if (isInAudiosArr(boardAudioObj.audio)) {
      audios.splice(boardAudioObj, 1);
      stopPlaying(boardAudioObj.audio)
      boardSlider.style.display = "none";
      return;
    }

    if (audios.length === 0) {
      audios.push(boardAudioObj);
      playAudios();
    } else {
      audios.push(boardAudioObj);
    }
  });

  Lamp.addEventListener('click', () => {
    const lampAudioObj = {audio: lampAudio, slider: lampSlider, objVolume: lampVolume, range: lampRange};

    if (isInAudiosArr(lampAudioObj.audio)) {
      audios.splice(lampAudioObj, 1);
      stopPlaying(lampAudioObj.audio)
      lampSlider.style.display = "none";
      return;
    }

    if (audios.length === 0) {
      audios.push(lampAudioObj);
      playAudios();
    } else {
      audios.push(lampAudioObj);
    }
  });
});
