const countdown = () => {
    const countDate = new Date("jully 30, 2029 19:00:00").getTime();
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
    
};

//rocket

function decolar(){
    const rocket = document.getElementById("rocket");

    rocket.classList.add("rocket")  
}

// contador 

setInterval(countdown, 1000);

// popUp 

const popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup")
}

function closePopup() {
    popup.classList.remove("open-popup");
}
