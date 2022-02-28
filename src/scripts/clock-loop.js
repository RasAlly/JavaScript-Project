

document.addEventListener("DOMContentLoaded", () => {
  // clock
  const Clock = document.getElementById('clock');
  const clockAudio = new Audio('./public/music/drumsv2.wav');
  

  Clock.addEventListener('click', () => {
    // debugger
    if (clockAudio.paused) {

      if (parseInt(localStorage.getItem('isPlayingCount')) === 0) {
        clockAudio.play();
        clockAudio.loop = true;
        localStorage.setItem('isPlayingCount', parseInt(localStorage.getItem('isPlayingCount')) + 1);
        return;
      } else {
        setTimeout(() => {
          clockAudio.play();
          clockAudio.loop = true;
          localStorage.setItem('isPlayingCount', parseInt(localStorage.getItem('isPlayingCount')) + 1);
          return;
        }, 3000);
      }
    }

    clockAudio.pause();

    clockAudio.currentTime = 0;

    if (parseInt(localStorage.getItem('isPlayingCount')) !== 0) {
      localStorage.setItem('isPlayingCount', parseInt(localStorage.getItem('isPlayingCount')) - 1);
    }
    
  });

  // window
});
