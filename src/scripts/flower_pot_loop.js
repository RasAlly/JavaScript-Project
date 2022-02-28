document.addEventListener("DOMContentLoaded", () => {
  // pool
  const Flower = document.getElementById('flower-pot');
  const flowerAudio = new Audio('./public/music/piano7sec.wav');

  
  Flower.addEventListener('click', () => {
    // debugger
    
    if (flowerAudio.paused) {
      if (parseInt(localStorage.getItem('isPlayingCount')) === 0) {
        flowerAudio.play();``
        flowerAudio.loop = true;
        localStorage.setItem('isPlayingCount', parseInt(localStorage.getItem('isPlayingCount')) + 1);
        return;
      } else {
        setTimeout(() => {
          flowerAudio.play();
          flowerAudio.loop = true;
          localStorage.setItem('isPlayingCount', parseInt(localStorage.getItem('isPlayingCount')) + 1);
          return;
        }, (7 - parseInt(localStorage.getItem('duration'))) * 1057.5);
      }
    }

    flowerAudio.pause();
    
    flowerAudio.currentTime = 0;

    if (parseInt(localStorage.getItem('isPlayingCount')) !== 0) {
      localStorage.setItem('isPlayingCount', parseInt(localStorage.getItem('isPlayingCount')) - 1);
    }
  });
  // let isPlay = function() {
  //   return !flowerAudio.paused;
  // }
  
  
  // window
});



