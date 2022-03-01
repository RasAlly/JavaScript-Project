// document.addEventListener("DOMContentLoaded", () => {
//   // chair
//   const Chair = document.getElementById('chair');
//   const chairAudio = new Audio('./public/music/elec_guitar.wav');
  

//   Chair.addEventListener('click', () => {
//     // debugger
//     if (chairAudio.paused) {

//       if (parseInt(localStorage.getItem('isPlayingCount')) === 0) {
//         chairAudio.play();
//         chairAudio.loop = true;
//         localStorage.setItem('isPlayingCount', parseInt(localStorage.getItem('isPlayingCount')) + 1);
//         return;
//       } else {
//         setTimeout(() => {
//           chairAudio.play();
//           chairAudio.loop = true;
//           localStorage.setItem('isPlayingCount', parseInt(localStorage.getItem('isPlayingCount')) + 1);
//           return;
//         }, (7 - parseInt(localStorage.getItem('duration'))) * 1057.5);
//       }
//     }

//     chairAudio.pause();

//     chairAudio.currentTime = 0;

//     if (parseInt(localStorage.getItem('isPlayingCount')) !== 0) {
//       localStorage.setItem('isPlayingCount', parseInt(localStorage.getItem('isPlayingCount')) - 1);
//     }
    
//   });

//   // window
// });