let intervalId;
let seconds = 60;
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const timer = document.getElementById('time');
const hourglass = document.getElementById('hourglass');
const updateTimer = () => {
    seconds--;
    const [minutes, remainingSeconds] = [Math.floor(seconds / 60), seconds % 60];
    timer.innerHTML = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    hourglass.style.transform = `rotate(${(seconds / 60) * 360}deg)`;
};
const startTimer = () => {
    clearInterval(intervalId);
    seconds = 60;
    updateTimer();
    intervalId = setInterval(() => {
        updateTimer();
        if (seconds === 0) {
            clearInterval(intervalId);
            seconds = 60;
            timer.innerHTML = '1:00';
        }
    }, 1000);
};
const stopTimer = () => {
    clearInterval(intervalId);
    seconds = 60;
    timer.innerHTML = '1:00';
};
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);

