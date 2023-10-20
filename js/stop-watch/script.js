let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopWatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  displayTime.innerHTML = hours + ":" + minutes + ":" + seconds;
}

function watchStart() {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}

function watchStop() {
  clearInterval(timer);
}

function watchReset() {
  clearInterval(timer);
  let [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
}
