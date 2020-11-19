export default (selector, date) => {
    const timerElement = document.querySelector(selector);

    function getTime(date) {
        if (!date) {
            const today = new Date();

            today.setHours(0, 0, 0, 0);
            today.setDate(today.getDate() + 1);

            return today.getTime();
        }
        
        return new Date(date).getTime();
    }

    function setTimerData(timerElement, hours, minutes, seconds) {
        timerElement.querySelector('#hours').innerText = hours < 10 ? "0" + hours : hours;
        timerElement.querySelector('#minutes').innerText = minutes < 10 ? "0" + minutes : minutes;
        timerElement.querySelector('#seconds').innerText = seconds < 10 ? "0" + seconds : seconds;
    }

    function startTimer(endTime) {
        const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24,
                timerId = setInterval(() => timer(), second);

        function timer() {
            let now = new Date().getTime(),
                distance = endTime - now,
                hours = 0, minutes = 0, seconds = 0;

            if (distance > 0) {
                hours = Math.floor((distance % (day)) / (hour)),
                minutes = Math.floor((distance % (hour)) / (minute)),
                seconds = Math.floor((distance % (minute)) / second);
            } 
            else {
                clearInterval(timerId);
            }

            setTimerData(timerElement, hours, minutes, seconds);
        }

        timer();
    }

    timerElement && startTimer(getTime(date));
}