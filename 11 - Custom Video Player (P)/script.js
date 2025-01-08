// Grabbing buttons

const player = document.querySelector('.player');  // Main div 
const video = player.querySelector('.viewer');  // Video
const progress = player.querySelector('.progress');  // Progress bar's div
const progressBar = player.querySelector('.progress__filled');  // Progress bar
const toggle = player.querySelector('.toggle');  // Stop & Play button
const skipButtons = player.querySelectorAll('[data-skip]');  // Data to skip (Amount of secs)
const ranges = player.querySelectorAll('.player__slider');  // Volume & Speed ranges



// Changes pause & play button style

function playPauseVideoWithIcon() {
  const icon = video.paused ? '❚ ❚' : '►';

  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }

  toggle.textContent = icon; // inserts icon (similar to innerHTML)
}

video.addEventListener('click', playPauseVideoWithIcon); // Works when clicking on video
toggle.addEventListener('click', playPauseVideoWithIcon); // Works when clicking on button



// Skips the video

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

skipButtons.forEach(button => {
  button.addEventListener('click', skip);
});



// Updates volume & speed of video

function rangeUpdate() {
  video[this.name] = this.value;
}
// Grabs 'name' & 'playbackRate' from HTML elements then apply that to video element
ranges.forEach(range => {
  range.addEventListener('change', rangeUpdate);
});



// Changes colour of progress bar when video runs

function progressBarFunc() {
  const percentage = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percentage}%`;
}

video.addEventListener('timeupdate', progressBarFunc);



// Enables to skip in the video using progress bae

function scrub(event) {
  const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

progress.addEventListener('click', scrub);
