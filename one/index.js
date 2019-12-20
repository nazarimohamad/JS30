
window.addEventListener('keydown', (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const box = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  box.classList.add('isPlaying')
})


document.addEventListener("DOMContentLoaded", function() {
  function removeTransion(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('isPlaying')
  }
  const allKey = document.querySelectorAll('.key');
  allKey.forEach(key => key.addEventListener('transitionend', removeTransion))
});

// const allKey = document.querySelectorAll('.key')
// allKey.forEach(key => key.addEventListener('transionend', removeTransion))

// const removeTransion = (e) => {
//   console.log(e)
// }
