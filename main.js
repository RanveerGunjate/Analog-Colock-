
var time="<?php echo $row['time']; ?>";
var time=new Date(time);
var hrs=time.getHours();
var min=time.getMinutes();

setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)

  document.getElementById("H").innerHTML =currentDate.getHours();
  document.getElementById("M").innerHTML = currentDate.getMinutes();
  document.getElementById("S").innerHTML = currentDate.getSeconds();
  document.getElementById("D").innerHTML = currentDate.getDay();
  document.getElementById("MO").innerHTML = currentDate.getMonth();
    document.getElementById("Y").innerHTML = currentDate.getFullYear();
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()  