import './style.css';

document.querySelector('#app').innerHTML = `
  <h1>カウンター</h1>

  <p id="count">0</p>
  
  <button id="reset-btn">リセット</button>
  <button id="decrease-btn">-</button>
  <button id="increase-btn">+</button>
`;

const countEl = document.querySelector('#count');
const resetBtn = document.querySelector('#reset-btn');
const decreaseBtn = document.querySelector('#decrease-btn');
const increaseBtn = document.querySelector('#increase-btn');
let count = 0;

resetBtn.addEventListener('click', () => {
  count = 0;
  countEl.textContent = count;
});

decreaseBtn.addEventListener('click', () => {
  count -= 1;
  countEl.textContent = count;
});

increaseBtn.addEventListener('click', () => {
  count += 1;
  countEl.textContent = count;
});