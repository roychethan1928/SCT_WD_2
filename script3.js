
let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resumeBtn = document.getElementById('resume-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resumeBtn.addEventListener('click', resumeTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    startTime = new Date().getTime();
    timerInterval = setInterval(updateTimer, 10);
    isRunning = true;
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    stopBtn.disabled = false;
    resumeBtn.disabled = true;
}

function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    pauseBtn.disabled = true;
    resumeBtn.disabled = false;
    stopBtn.disabled = false;
}

function resumeTimer() {
    startTime = new Date().getTime() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10);
    isRunning = true;
    pauseBtn.disabled = false;
    resumeBtn.disabled = true;
    stopBtn.disabled = false;
}

function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resumeBtn.disabled = true;
    stopBtn.disabled = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    display.textContent = '00:00:00.000';
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resumeBtn.disabled = true;
    stopBtn.disabled = true;
}

function updateTimer() {
    const currentTime = new Date().getTime();
    elapsedTime = currentTime - startTime;
    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000));
    display.textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}.${padZeroMilliseconds(milliseconds)}`;
}

function padZero(value) {
    return (value < 10 ? '0' : '') + value;
}

function padZeroMilliseconds(value) {
    return (value < 100 ? '0' : '') + (value < 10 ? '0' : '') + value;
}