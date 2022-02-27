
document.addEventListener("DOMContentLoaded", () => {
  // clock
  const Lamp = document.getElementById('lamp');
  const lampAudio = new Audio('./public/music/flutev2.wav');

  let lampCount = 0;

  Lamp.addEventListener('click', () => {
    
    if (lampCount === 0) {
      lampAudio.play();
      lampAudio.loop = true;
      lampCount = 1;
      return;
    } 

    lampAudio.pause();
    lampCount = 0;
  });

  // window
});