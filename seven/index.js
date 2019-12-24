const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
};

function updateButton() {
  const icon = this.paused ? '▶' : '❚ ❚';
  toggle.textContent = icon;
};

function skip() {
  video.currentTime += parseFloat(this.dataset.skip)
};

function handleRangeUpdata() {
  console.log(this.value)
  video[this.name] = this.value;
};

function handleProgres() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
};

function scrub(e) {
  // because it has a position relative it has offestX and offestY
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
};


video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgres);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));


let isRangeMouseDown = false;
ranges.forEach(range => range.addEventListener('change', handleRangeUpdata));


let isProgressMouseDown = false;
progress.addEventListener('click', scrub);
progressBar.addEventListener('mousemove', (e) => isProgressMouseDown && scrub(e));
progressBar.addEventListener('mousedown', () => isProgressMouseDown = true);
progressBar.addEventListener('mouseup', () => isProgressMouseDown = false);
