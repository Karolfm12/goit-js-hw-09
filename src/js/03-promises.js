const firstDelay = document.querySelector('[name=delay]');
const delayStep = document.querySelector('[name=step]');
const amountInput = document.querySelector('[name="amount"]');
const button = document.querySelector('[type="submit"]');

button.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(amountInput.value);
  const startDelay = Number(firstDelay.value);
  const step = Number(delayStep.value);

  for (let i = 1; i <= amount; i++) {
    const currentDelay = startDelay + (i - 1) * step;

    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${i} in ${currentDelay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${i} in ${currentDelay}ms`);
      });
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
