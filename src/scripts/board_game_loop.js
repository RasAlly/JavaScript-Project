document.addEventListener("DOMContentLoaded", () => {
  // clock
  const Board = document.getElementById('board-game');
  const boardAudio = new Audio('./public/music/bass.wav');

  let boardCount = 0;

  Board.addEventListener('click', () => {
    
    if (boardCount === 0) {
      boardAudio.play();
      boardAudio.loop = true;
      boardCount = 1;
      return;
    } 

    boardAudio.pause();
    boardCount = 0;
  });

  // window
});