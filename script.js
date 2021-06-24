const daysEl= document.getElementById('days');
const hoursEl= document.getElementById('hours');
const minutesEl=document.getElementById('minutes');
const secondsEl=document.getElementById('seconds');

const newYears = "14 May 2021";

function countdown() {
    const newYearsdate =new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsdate - currentDate)/1000;
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const minutes = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds%60);
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

}
function createHeart()
{
    const heart=document.createElement('div');
    heart.classList.add('heart');
    heart.style.left= Math.random() * 100 + "vw";
    heart.style.animationDuration=Math.random()* 2 + 3 + "s";
    heart.innerText='💜';
    document.body.appendChild(heart);

    setTimeout(() =>{
        heart.remove();
    },5000);
}
function formatTime(time){
    return time < 10 ? `0${time}`: time;
}

countdown();

setInterval(countdown,1000);
setInterval(createHeart,200);