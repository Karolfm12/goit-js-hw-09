const firstDelay = document.querySelector('[name=delay]');
const delayStep = document.querySelector('[name=step]');
const amount = document.querySelector('[name="amount"]');
const button = document.querySelector('[type="submit"]');

button.addEventListener('click', e => {
  e.preventDefault();
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {});
  });
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
