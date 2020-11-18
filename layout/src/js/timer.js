const second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;

let countDown = new Date();

countDown.setHours(0, 0, 0, 0);
countDown.setDate(countDown.getDate() + 1);
countDown = countDown.getTime(),

x = setInterval(function() {    

    let now = new Date().getTime(),
        distance = countDown - now;

    let hours = Math.floor((distance % (day)) / (hour))
    let minutes = Math.floor((distance % (hour)) / (minute));
    let seconds = Math.floor((distance % (minute)) / second)

    document.getElementById('hours').innerText = hours<10? "0"+hours : hours,
    document.getElementById('minutes').innerText = minutes<10? "0"+minutes : minutes,
    document.getElementById('seconds').innerText = seconds<10? "0"+seconds : seconds;

}, second)