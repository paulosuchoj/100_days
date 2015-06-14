var soundPlaying = false;
var audio = document.createElement("audio");

$(document).ready(function playSound(btnId) {
  switch(btnId){
    case "sea":
      if(soundPlaying = false){
        soundPlaying = true;

        audio.setAttribute("src", "sounds/sea.mp3");
        audio.setAttribute("autoplay", "autoplay");
        audio.setAttribute("loop");

        audio.Play();
      }else{
        soundPlaying = false;

        audio.Stop();
      }
      break;
  }
});
