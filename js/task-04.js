const minusBtn = document.querySelector('[data-action="decrement"]');
const plusBtn = document.querySelector('[data-action="increment"]');

const valueSpan = document.querySelector('#value');

let counterValue = 0;

function updateCounter() {
    valueSpan.textContent = counterValue;
};

minusBtn.addEventListener('click',() => {
    counterValue -= 1;
    updateCounter();
}); 

plusBtn.addEventListener('click',() => {
    counterValue += 1;
    updateCounter();
}); 