const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function setTime() {
  const currentTime = new Date();
  // const Time = `${currentTime.getHours()} : ${currentTime.getMinutes()}: ${currentTime.getSeconds()}`;

  hrs.innerText = currentTime.getHours();
  min.innerText = currentTime.getMinutes();
  sec.innerText = currentTime.getSeconds();
}

setInterval(setTime, 1000);
