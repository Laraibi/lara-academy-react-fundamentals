const countNode = document.querySelector('#count');
const totalNode = document.querySelector('#total');
const addButton = document.querySelector('#add');
let count = 0;

addButton.addEventListener('click', () => {
  count += 1;
  countNode.textContent = count;
  // Défi volontaire : mettre aussi le total à jour. JavaScript sait le faire.
});
