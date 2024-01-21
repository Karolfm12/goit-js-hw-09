import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/l10n/pl';

const inputDays = document.querySelector('[data-days]');
const inputHours = document.querySelector('[data-hours]');
const inputMinutes = document.querySelector('[data-minutes]');
const inputSeconds = document.querySelector('[data-seconds]');

const startButton = document.querySelector('[data-start]');
const chooseDate = document.querySelector('#datetime-picker');
const date = new Date();

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
    // console.log(selectedDates[0] > date);
    const ms = selectedDates[0].getMilliseconds();
    if (selectedDates[0] > date) {
      startButton.disabled = false;

      startButton.addEventListener('click', () => {
        setInterval(() => {
          convertMs(fp.latestSelectedDateObj - new Date());
        }, 1000);
      });
    } else {
      startButton.disabled = true;
      alert('Please choose a date in the future');
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
  inputDays.textContent = days;
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  inputHours.textContent = hours;
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  inputMinutes.textContent = minutes;
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  inputSeconds.textContent = seconds;

  return { days, hours, minutes, seconds };
}
