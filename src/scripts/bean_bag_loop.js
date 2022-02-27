
document.addEventListener("DOMContentLoaded", () => {
  // clock
  const Bag = document.getElementById('bean-bag');
  const bagAudio = new Audio('./public/music/elec_guitar.wav');

  let bagCount = 0;

  Bag.addEventListener('click', () => {
    
    if (bagCount === 0) {
      bagAudio.play();
      bagAudio.loop = true;
      bagCount = 1;
      return;
    } 

    bagAudio.pause();
    bagCount = 0;
  });

  // window
});