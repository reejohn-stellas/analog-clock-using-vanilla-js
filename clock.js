const hourEL = document.querySelector(".hour");
const minEL = document.querySelector(".min");
const secEL = document.querySelector('.sec');

function UpdateClock() {
    var time = new Date()
    setTimeout(UpdateClock, 1000)
    let hours = time.getHours()
    let mins = time.getMinutes()
    let secs = time.getSeconds()
    let hour = (hours / 12) * 360
    let min = (mins / 60) * 360
    let sec = (secs / 60) * 360
    secEL.style.transform = `rotate(${sec}deg)`;
    minEL.style.transform = `rotate(${min}deg)`;
    hourEL.style.transform = `rotate(${hour}deg)`;

}
UpdateClock()