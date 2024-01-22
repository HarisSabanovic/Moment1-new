"use strict"


    let time = document.getElementById("current-time");

    function showTime() {
    let d = new Date();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let seconds = d.getSeconds();

    let realTime = `${hour}:${padZero(minute)}:${padZero(seconds)}`;

    time.innerHTML = realTime;
    }


    function padZero(value) {
        return value < 10 ? `0${value}` : value;
    }

    setInterval(showTime, 1000);

    showTime();
