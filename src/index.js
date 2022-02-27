import './scripts/pool_table_loop.js'
import './scripts/clock-loop.js'
import './scripts/lava_lamp_loop.js'
import './scripts/bean_bag_loop.js'
import './scripts/board_game_loop.js'

document.addEventListener("DOMContentLoaded", () => {
  // debugger
  // let count = 0
  // function waitTime() {
  //   while (count < 7) {
  //     setTimeout(() => {
  //       console.log(count)
  //       count += 1;
  //     }, 1000)
  //   }
  //   count = 0;
  //   return waitTime();
  // }
  // waitTime();

  localStorage.setItem('isPlayingCheck', null)

  localStorage.setItem('duration', 0)
  let counter = 0;
  let i = setInterval(function(){
    console.log(counter)
    
    counter += 1;
      if(counter === 7) {
        console.log(counter);
        counter = 0;
       return i;
      }
  }, 1057.5);
  localStorage.setItem('isPlayingCount', 0);
});