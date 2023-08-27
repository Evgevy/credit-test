function renderTimer(hours, minutes, seconds) {
    const hoursDisplay = hours < 10 ? `0${hours}` : hours;
    const minutesDisplay = minutes < 10 ? `0${minutes}` : minutes;
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    document.getElementById('hours').textContent = hoursDisplay;
    document.getElementById('minutes').textContent = minutesDisplay;
    document.getElementById('seconds').textContent = secondsDisplay;
};

function startTimer(duration) {
    let timeLeft = duration;
    const intervalId = setInterval(() => {
      const hours = Math.floor((timeLeft / (60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / 60) % 60);
      const seconds = Math.floor(timeLeft % 60);
      renderTimer(hours, minutes, seconds);
      if (--timeLeft < 0) {
        timeLeft = duration;
      }
    }, 1000);
};

const timerDuration = 30 * 60; 
startTimer(timerDuration);