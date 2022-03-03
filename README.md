<h1>Beat Maker Overview</h1>
 <p>This visualization is a place where I can display my music and the user controls the beat's arrangment.  <br>
 Choose a room to build a beat. Rooms are based on music genres, so each room will have different instruments and tempos to set the tone respectively. To hear a loop of an instrument, click around the room on different objects, which may not be the actual representation of the sound(e.g. A chair when clicked plays a loop an electrical piano). No need to wait for the next bar to add another loop, just click it whenever and the beat maker will synchronize it to the loops that are currently playing.</p> 
Control the gain of each loop to your desire!!!Enjoy:):)
  <br>
 <br>
    <a href="https://rasally.github.io/JavaScript-Project/">Live Site</a>
 <br>
 <br>
<h1>Technologies Used</h1>
 I used pure vanilla dom, with a little help from Javascript's built in Web Audio Api
 
<br>

<h1>Challenges Faced and Solutions</h1>

<h2>First Challenge</h2>
 I had some issues getting the volume slider to change the percentage of green being displayed based on the sliders value.
 At first I was using css animations but that wouldn't work since it's only supposed to change when the user drags the slider.
 
<h3>Solution:</h3> On a input change I call a function that gets the current slider value and sets the sliders background color based on the new percentage of green to white rendered. 

code snippet:
```
const playAudios = () => {
       ...
       
        range.addEventListener("input", createVolumeSlide.bind(null, audio, objVolume, range)); //when input changes => executes method
       
       ...
  }
  
const createVolumeSlide = (audio, objVolume, range) => {
    //sets current value
    let val = range.value;
    
    //changes amount of green when slider is dragged
    let color = 'linear-gradient(90deg, rgb(117, 252, 117)' + val + '%, rgb(214, 214, 214)' + val + '%)';
    
    //sets background of slider to the color above
    range.style.background = color; 
    
    //sets new volume based on slider value
    let newVol = objVolume.innerHTML / 100; 
    
     //sets audio to the new volume
    audio.volume = newVol; 
  }
```

<h2>Second Challenge</h2>
The audios wouldn't come in at the right time if there were other audios playing. I was using local storage to and a timer function to check if the timer when the timer reaches 0, then play all the audios in the local storage array. This didn't sync the audios correctly, eveything was off beat by a lot.
 
<h3>Solution:</h3> I used the built in Web Audio Api to check if the when the audio ended and when that's true the function gets called again.

code snippet:
```
  const playAudios = () => {
   ...
      
    audio.addEventListener('ended', () => {
      playAudios(); //calls function again
    });
    
    ...
   }
   
```
<h1>Future improvements/features</h1>

 - sync audio perfectly(no pauses)
 - Add more rooms/beats
 - make modal disapear when clicked on any part of screen
 - allow user to play full beat on button click
 - record button that records audio in real time and downloads the recording as mp3
