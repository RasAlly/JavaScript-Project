//change all variable names and audio files appropriately 

// export let stopAll;
// document.addEventListener("DOMContentLoaded", () => {

//   //timer bar
//   const timerBar = document.getElementById("timer-bar");

//   //sliders
//   const bowlSlider = document.getElementById('bowl-slider');
//   const flowerSlider = document.getElementById('flower-slider');
//   const chairSlider = document.getElementById('chair-slider');
//   const lampSlider = document.getElementById('lamp-slider');

//   let bowlRange = document.getElementById('bowl-range');
//   let flowerRange = document.getElementById('flower-range');
//   let chairRange = document.getElementById('chair-range');
//   let lampRange = document.getElementById('lamp-range');

//   let bowlVolume = document.getElementById('bowl-volume');
//   let flowerVolume = document.getElementById('flower-volume');
//   let chairVolume = document.getElementById('chair-volume');
//   let lampVolume = document.getElementById('lamp-volume');
     
//   bowlVolume.innerHTML = bowlRange.value;
//   flowerVolume.innerHTML = flowerRange.value;
//   chairVolume.innerHTML = chairRange.value;
//   lampVolume.innerHTML = lampRange.value;

//    const createVolumeSlide = (audio, objVolume, range) => {
//     let val = range.value; //sets current value 
//     let color = 'linear-gradient(90deg, rgb(117, 252, 117)' + val + '%, rgb(214, 214, 214)' + val + '%)'; //changes amount of green when slider is dragged
//     range.style.background = color; //sets background of slider to the color above
//     let newVol = objVolume.innerHTML / 100; //sets new volume based on slider value
//     audio.volume = newVol; //sets audio to the new volume
//   }
  
//   //audios
//   const audios = [];

//   const lowerVolume = (audio) => {
//     audio.volume = .2;
//   }
  
//   const Bowl = document.getElementById('bowl');
//   const bowlAudio = new Audio('./public/music/chill_hip_hop/snare_kik.wav');
//   lowerVolume(bowlAudio);

//   const Flower = document.getElementById('flower-pot');
//   const flowerAudio = new Audio('./public/music/chill_hip_hop/synth_bell.wav');
//   lowerVolume(flowerAudio);

//   const Chair = document.getElementById('chair');
//   const chairAudio = new Audio('./public/music/chill_hip_hop/synth_bass_final.wav');
//   lowerVolume(chairAudio);

//   const Lamp = document.getElementById('lamp');
//   const lampAudio = new Audio('./public/music/chill_hip_hop/hat_vibes.wav');
//   lowerVolume(lampAudio);
  

//   const stopPlaying = (audio) => {
//     audio.pause();
//     audio.currentTime = 0;
//   }

//   const toggleProgressBar = () => {
//     if (audios.length > 0 && !timerBar.classList.contains('play-animation')) {
//       timerBar.classList.add('play-animation');
//       return;
      
//     } else if (audios.length > 0 && timerBar.classList.contains('play-animation')) {
//       return;
//     } else if (audios.length === 0) {
//       timerBar.classList.remove('play-animation');
//       return;
//     }
//   }
//   // let count = 0;
//   const playAudios = () => {
//     toggleProgressBar();

//     if (audios.length > 0) { // checks if any audios are clicked on
//       for (let i = 0; i < audios.length; i++) {
//         const ele = audios[i]; // {audio: flowerAudio, slider: flowerSlider}
//         const audio = ele.audio;
//         const slider = ele.slider;
//         const objVolume = ele.objVolume;
//         const range = ele.range;
//         audio.play();

//         range.oninput = function() { //changing slider volume value on input(drag)
//           objVolume.innerHTML = this.value;
//         }

//         slider.style.display = "block"; // unhides slider 
//         range.addEventListener("input", createVolumeSlide.bind(null, audio, objVolume, range)); //when input changes => executes method
//         audio.addEventListener('ended', () => {
//           playAudios(); //call function again
//         });
//       }
//     }
//     return;
//   }

//   const isInAudiosArr = (audio) => {
//     for (let i = 0; i < audios.length; i++) {
//       if (audios[i].audio === audio) return true;
//     }
//     return false;
//   }

//   // const isPlaying = () => {
//   //  if (audios.length === 0) {
//   //    if (timerBar.hasAttribute('play-animation')) {
//   //      timerBar.removeAttribute('play-animation');
//   //    }
//   //  } else {
//   //    animateBar();
//   //  }
//   // }

//   ///////////

  
//   const removeAnimation = () => {
//     if (audios.length === 0) {
//       timerBar.classList.remove('play-animation');
//     }
//   }

//   const removeFromArray = (obj) => {
//     audios.splice(audios.findIndex(a => a.audio === obj.audio) , 1);

//     if (audios.length === 0) {
//       timerBar.classList.add('no-width');
//     }
//   }

//   stopAll = () => {
//     audios.forEach(obj => {
//       stopPlaying(obj.audio);
//       timerBar.classList.remove('play-animation');
//     })
//     let sliders = document.getElementsByClassName('slider-cont');

//       for (let i = 0; i < sliders.length; i++) {
//         const slider = sliders[i];
//         slider.style.display = 'none';
//       }
//   }

//   Bowl.addEventListener('click', () => {
//     const bowlAudioObj = {audio: bowlAudio, slider: bowlSlider, objVolume: bowlVolume, range: bowlRange};
//     // const index = audios.indexOf(bowlAudioObj);

//     if (isInAudiosArr(bowlAudioObj.audio)) {
//       removeFromArray(bowlAudioObj);
//       stopPlaying(bowlAudio);
//       bowlSlider.style.display = "none";
//       removeAnimation();
//       return;
//     }

//     if (audios.length === 0) {
//       audios.push(bowlAudioObj);
//       playAudios();
//     } else {
//       audios.push(bowlAudioObj);
//     }
//   });

//   Flower.addEventListener('click', () => {
//     const flowerAudioObj = {audio: flowerAudio, slider: flowerSlider, objVolume: flowerVolume, range: flowerRange};

//     if (isInAudiosArr(flowerAudioObj.audio)) {
//       removeFromArray(flowerAudioObj);
//       stopPlaying(flowerAudioObj.audio)
//       flowerSlider.style.display = "none";
//       removeAnimation();
//       return;
//     }

//     if (audios.length === 0) {
//       audios.push(flowerAudioObj);
//       playAudios();
//     } else {
//       audios.push(flowerAudioObj);
//     }
//   });
  
//   Chair.addEventListener('click', () => {
//     const chairAudioObj = {audio: chairAudio, slider: chairSlider, objVolume: chairVolume, range: chairRange};
//     // const index = audios.indexOf(chairAudioObj);

//     if (isInAudiosArr(chairAudioObj.audio)) {
//       removeFromArray(chairAudioObj);
//       stopPlaying(chairAudio);
//       chairSlider.style.display = "none";
//       removeAnimation();
//       return;
//     }

//     if (audios.length === 0) {
//       audios.push(chairAudioObj);
//       playAudios();
//     } else {
//       audios.push(chairAudioObj);
//     }
//   });


//   Lamp.addEventListener('click', () => {
//     const lampAudioObj = {audio: lampAudio, slider: lampSlider, objVolume: lampVolume, range: lampRange};

//     if (isInAudiosArr(lampAudioObj.audio)) {
//       removeFromArray(lampAudioObj);
//       stopPlaying(lampAudioObj.audio)
//       lampSlider.style.display = "none";
//       removeAnimation();
//       return;
//     }

//     if (audios.length === 0) {
//       audios.push(lampAudioObj);
//       playAudios();
//     } else {
//       audios.push(lampAudioObj);
//     }
//   });

//    //mute btn
//    const mute_btn = document.getElementById('mute');

//    let isMuteClicked = false;
 
//    mute_btn.addEventListener('click', () => {
//      if (!isMuteClicked){
//        for (let i = 0; i < audios.length; i++) {
//          const audio = audios[i].audio;
//            audio.volume = 0;
//        }
//          mute_btn.innerHTML = 'unmute';
//          isMuteClicked = true;
//          return;
//      }
//      for (let i = 0; i < audios.length; i++) {
//        const audio = audios[i].audio;
//          audio.volume = 0.2;
//      }
//        mute_btn.innerHTML = 'mute';
//        isMuteClicked = false;
//    })
// });
