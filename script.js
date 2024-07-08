window.addEventListener("keydown", (e) => {
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(audio){  // if audio for key is present
        audio.currentTime = 0 //rewind audio to beginning
        audio.play() 
    }
   key.classList.add("playing") //class for the animation
});

const keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener("transitionend", (e) =>{
   if(e.propertyName === "transform"){
    e.target.classList.remove('playing')
   }
}))
