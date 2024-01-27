import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/l10n/pl';
import Notiflix from 'notiflix';

const inputDays = document.querySelector('[data-days]');
const inputHours = document.querySelector('[data-hours]');
const inputMinutes = document.querySelector('[data-minutes]');
const inputSeconds = document.querySelector('[data-seconds]');

const startButton = document.querySelector('[data-start]');
const chooseDate = document.querySelector('#datetime-picker');
const date = new Date();
let timerId = null;

startButton.disabled = true;
const fp = flatpickr(chooseDate, {
  //   minDate: 'today',
  locale: 'pl',
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  position: 'right',
  onClose(selectedDates) {
    startButton.disabled = true;
    const ms = selectedDates[0].getMilliseconds();
    if (selectedDates[0] > date) {
      startButton.disabled = false;

      startButton.addEventListener('click', () => {
        startButton.disabled = true;
        timerId = setInterval(() => {
          let differnece = fp.latestSelectedDateObj - new Date();
          if (differnece >= 0) {
            convertMs(differnece);
          } else {
            clearInterval(timerId);
          }
          console.log(differnece);
        }, 1000);
      });
    } else {
      startButton.disabled = true;
      // alert('Please choose a date in the future');
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  inputDays.textContent = addLeadingZero(days);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  inputHours.textContent = addLeadingZero(hours);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  inputMinutes.textContent = addLeadingZero(minutes);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  inputSeconds.textContent = addLeadingZero(seconds);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
