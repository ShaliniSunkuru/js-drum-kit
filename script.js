window.addEventListener("keydown", (e) => {
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(audio){  // if audio for key is present
        audio.currentTime = 0 //rewind audio to beginning
        audio.play() 
    }
   
});
