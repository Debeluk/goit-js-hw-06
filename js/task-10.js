function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes (amount) {
  if (amount <=0) {
    alert('Значення не може бути від`ємним');
    return;
  }
  destroyBoxes();
  const boxesDiv = document.getElementById('boxes');
  const boxesSize = 30;

  const boxesAr = [];

  for (let i = 0; i < amount; i+= 1) {
    const box = document.createElement('div');
    box.style.width = box.style.height = `${boxesSize + i*10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesAr.push(box);
  }

  boxesDiv.append(...boxesAr);
};

function destroyBoxes() {
  const boxesDiv = document.getElementById('boxes'); 
  // Знайшов такий метод видалення у інтернеті
  while (boxesDiv.firstChild) {               
    boxesDiv.removeChild(boxesDiv.firstChild);
  };
};

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('input[type="number"]');

createBtn.addEventListener('click', () => {
  const amount = input.value;
  createBoxes(amount);
});

destroyBtn.addEventListener('click', destroyBoxes)