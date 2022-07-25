const countdown = () => {
    const countDate = new Date("jully 25, 2022 16:37:40").getTime();
    const now = new Date().getTime();
    const gap = countDate - now; 
    

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const textDay = Math.floor(gap / day);
const textHour = Math.floor((gap % day) / hour);
const texMinute = Math.floor((gap % hour) / minute);
const textSecond = Math.floor((gap % minute)/ second);

document.querySelector(".day").innerHTML = textDay;
document.querySelector(".hour").innerHTML = ": "+textHour;
document.querySelector(".minute").innerHTML = ": "+texMinute;
document.querySelector(".second").innerHTML = ": "+textSecond;


function decolar(){
    remove(".rocket");
}
if(gap > countDate)
       decolar();
};



setInterval(countdown, 1000);

const popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup")
}

function closePopup() {
    popup.classList.remove("open-popup");
}