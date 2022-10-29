const weightInput = document.getElementById('weight-input');
const convertBtn = document.getElementById('convert-button');

let pounds = document.querySelector('.pounds');
let ounces = document.querySelector('.ounces');
let stone = document.querySelector('.stone');

// kg to pounds = * 2.205
// kg to ounces = * 35.274
// kg to stone =  * 6.35


convertBtn.addEventListener('click', function(e) {
  const weight = weightInput.value;
  e.preventDefault();
  console.log(weight)
  weightInput.value = ''
  pounds.innerText = (weight * 2.205).toFixed(1) + ' pounds';
  ounces.innerText = (weight * 35.274).toFixed(1) + ' ounces';
  stone.innerText = (weight * 6.35).toFixed(1) + ' stone';
})