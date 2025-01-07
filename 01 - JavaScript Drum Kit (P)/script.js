// Adds audio and transition class
window.addEventListener('keydown', (event) => {

  // Extracts the audio via keyboard key
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`); // Extracts div

  if(!audio) return; // Stop the function if other key is pressed 

  audio.currentTime = 0; // Renewes the audio if button is pressed again
  audio.play(); // Plays the audio


  key.classList.add('playing'); // Addes transition class
})


// removes transition
function removeTransition(event) {
  // only resposes to 'transform' property
  if (event.propertyName !== 'transform') {
    return;
  } else {
    this.classList.remove('playing');
  }
}

const keys = document.querySelectorAll('.key');

keys.forEach((k) => { 
  // removes the transition after time specified in CSS
  k.addEventListener('transitionend', removeTransition);
})