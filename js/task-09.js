function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector('.change-color');
const backgroundName = document.querySelector('.color');
const backgroundElem = document.body;

changeColorButton.addEventListener('click', function() {
    const randomColor = getRandomHexColor();
    backgroundElem.style.backgroundColor = randomColor;
    backgroundName.textContent = randomColor;
});