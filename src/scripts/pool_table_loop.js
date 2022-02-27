let isPlay = false;
document.addEventListener("DOMContentLoaded", () => {
  // pool
  const Pool = document.getElementById('pool-table');
  const poolAudio = new Audio('./public/music/piano7sec.wav');

  
  Pool.addEventListener('click', () => {
    // debugger
    
    if (poolAudio.paused) {
      if (parseInt(localStorage.getItem('isPlayingCount')) === 0) {
        poolAudio.play();
        poolAudio.loop = true;
        localStorage.setItem('isPlayingCount', parseInt(localStorage.getItem('isPlayingCount')) + 1);
        return;
      } else {
        setTimeout(() => {
          poolAudio.play();
          poolAudio.loop = true;
          localStorage.setItem('isPlayingCount', parseInt(localStorage.getItem('isPlayingCount')) + 1);
          return;
        }, 3000);
      }
    }

    poolAudio.pause();
    
    poolAudio.currentTime = 0;

    if (parseInt(localStorage.getItem('isPlayingCount')) !== 0) {
      localStorage.setItem('isPlayingCount', parseInt(localStorage.getItem('isPlayingCount')) - 1);
    }
  });
  // let isPlay = function() {
  //   return !poolAudio.paused;
  // }
  
  
  // window
});



