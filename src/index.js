import './scripts/flower_pot_loop.js'
import './scripts/clock-loop.js'
import './scripts/lava_lamp_loop.js'
import './scripts/chair_loop.js'
import './scripts/board_game_loop.js'

document.addEventListener("DOMContentLoaded", () => {
  // debugger

  localStorage.setItem('isPlayingCount', 0);
  
  let counter = 0;
  if (parseInt(localStorage.getItem('isPlayingCount')) > 0) {
    let timer = setInterval(function(){
      localStorage.setItem('duration', counter);
      console.log(counter)
      counter += 1;
        if (parseInt(localStorage.getItem('isPlayingCount')) === 0) {
          return;
        }
        if (counter === 7) {
          counter = 0;
        }
        return timer;
      }, 1057.5);
  } 

});

/*
  set local storage hash to a boolean of every audio to check if playing

  loop through hash in index.js and check if any sound is playing => 
  store that result in a local storage var
  if sound 

  in the file of the clicked on object check if the local storage var above is true => if so 
*/