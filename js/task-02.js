const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.getElementById('ingredients');

const li = []; 

ingredients.forEach((ingredient) => {
  const liElement = document.createElement('li'); 
  liElement.textContent = ingredient;
  liElement.classList.add('item');
  li.push(liElement);
});

ulList.append(...li);
