let hoursSpan = document.querySelector(".hours");
let minutsSpan = document.querySelector(".minuts");
let secuntsSpan = document.querySelector(".secunts");

let currentTime = new Date(); //hozirgi vaqt

let hours = currentTime.getHours(); //11
let minuts = currentTime.getMinutes();//6
let secunts = currentTime.getSeconds();

hoursSpan.textContent = hours;
minutsSpan.textContent = minuts;
secuntsSpan.textContent = secunts;

setInterval(() => {
    secunts = Number(secuntsSpan.textContent);
    minuts = Number(minutsSpan.textContent);
    hours = Number(hoursSpan.textContent);

    secunts = secunts +1
    
    if(secunts === 60) {
        secunts = 0;
        minuts = minuts +1;
    }

    if (minuts === 60) {ы
        minuts = minuts +1
    }

    hoursSpan.textContent = hours;
    minutsSpan.textContent = minuts;
    secuntsSpan.textContent = secunts;
    
}, 1000)