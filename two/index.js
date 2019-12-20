const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');


function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes/60) * 360) + 90;;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

  const hours = now.getHours();
  const hoursDegrees = ((hours/60) * 360) + 90;;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000);



