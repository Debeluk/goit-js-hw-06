const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.getElementById('ingredients');

ingredients.forEach((ingredient) => {
  const liElement = document.createElement('li');
  liElement.textContent = ingredient;
  liElement.classList.add('item');
  ulList.appendChild(liElement);
});