// Clock
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("clock").textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();

// Stopwatch
let [hours, minutes, seconds] = [0, 0, 0];
let stopwatchInterval;

function updateStopwatchDisplay() {
  const h = String(hours).padStart(2, '0');
  const m = String(minutes).padStart(2, '0');
  const s = String(seconds).padStart(2, '0');
  document.getElementById("stopwatch").textContent = `${h}:${m}:${s}`;
}

function startStopwatch() {
  if (stopwatchInterval) return;
  stopwatchInterval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateStopwatchDisplay();
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  [hours, minutes, seconds] = [0, 0, 0];
  updateStopwatchDisplay();
}
