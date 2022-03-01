// document.addEventListener("DOMContentLoaded", () => {
//   // lamp
//   const Lamp = document.getElementById('lamp');
//   const lampAudio = new Audio('./public/music/flutev2.wav');
  

//   Lamp.addEventListener('click', () => {
//     // debugger
//     if (lampAudio.paused) {

//       if (parseInt(localStorage.getItem('isPlayingCount')) === 0) {
//         lampAudio.play();
//         lampAudio.loop = true;
//         localStorage.setItem('isPlayingCount', parseInt(localStorage.getItem('isPlayingCount')) + 1);
//         return;
//       } else {
//         setTimeout(() => {
//           lampAudio.play();
//           lampAudio.loop = true;
//           localStorage.setItem('isPlayingCount', parseInt(localStorage.getItem('isPlayingCount')) + 1);
//           return;
//         }, (7 - parseInt(localStorage.getItem('duration'))) * 1057.5);
//       }
//     }

//     lampAudio.pause();

//     lampAudio.currentTime = 0;

//     if (parseInt(localStorage.getItem('isPlayingCount')) !== 0) {
//       localStorage.setItem('isPlayingCount', parseInt(localStorage.getItem('isPlayingCount')) - 1);
//     }
    
//   });

//   // window
// });