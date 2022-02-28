document.addEventListener("DOMContentLoaded", () => {
  // board
  const Board = document.getElementById('board-game');
  const boardAudio = new Audio('./public/music/bass.wav');
  

  Board.addEventListener('click', () => {
    // debugger
    if (boardAudio.paused) {

      if (parseInt(localStorage.getItem('isPlayingCount')) === 0) {
        boardAudio.play();
        boardAudio.loop = true;
        localStorage.setItem('isPlayingCount', parseInt(localStorage.getItem('isPlayingCount')) + 1);
        return;
      } else {
        setTimeout(() => {
          boardAudio.play();
          boardAudio.loop = true;
          localStorage.setItem('isPlayingCount', parseInt(localStorage.getItem('isPlayingCount')) + 1);
          return;
        }, (7 - parseInt(localStorage.getItem('duration'))) * 1057.5);
      }
    }

    boardAudio.pause();

    boardAudio.currentTime = 0;

    if (parseInt(localStorage.getItem('isPlayingCount')) !== 0) {
      localStorage.setItem('isPlayingCount', parseInt(localStorage.getItem('isPlayingCount')) - 1);
    }
    
  });

  // window
});