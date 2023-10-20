function displayTime() {
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
  var seconds = dateTime.getSeconds();
  var sessions = document.getElementById("sessions");
  if (hrs > 12) {
    sessions.innerHTML = "PM";
  } else {
    sessions.innerHTML = "AM";
  }
  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("seconds").innerHTML = seconds;
}

setInterval(() => {
  displayTime();
}, 10);
