// DATA
let yourName = "Jay Brewer"; // HINT: Replace this with your own name!
let gb = 0; // Gingerbread
let cc = 0; // Chocolate Chip
let sugar = 0; // Sugar Sprinkle

// SELECTORS

let minusGb = document.getElementById("minus-gb");
let addGb = document.getElementById("add-gb");
let totalGb = document.getElementById("qty-gb");

let minusCc = document.getElementById("minus-cc");
let addCc = document.getElementById("add-cc");
let totalCc = document.getElementById("qty-cc");

let minusSugar = document.getElementById("minus-sugar");
let addSugar = document.getElementById("add-sugar");
let totalSugar = document.getElementById("qty-sugar");

let totalAll = document.getElementById("qty-total");
let total = 0

const credit = document.querySelector("#credit");

const gbPlusBtn = document.querySelector("#add-gb");

credit.textContent = `Created by ${yourName}`;

// EVENT LISTENERS
// (-/+) for Ginger Bread
minusGb.addEventListener("click", () => {
  gb--;
  totalGb.innerHTML = gb;
total= gb +cc+sugar
totalAll.innerHTML = total
});
addGb.addEventListener("click", () => {
  gb++;
  totalGb.innerHTML = gb;
  total= gb +cc+sugar
totalAll.innerHTML = total
});
// (-/+) for Chocolate Chip
minusCc.addEventListener("click", () => {
  cc--;
  totalCc.innerHTML = cc;
  total= gb +cc+sugar
totalAll.innerHTML = total
});
addCc.addEventListener("click", () => {
  cc++;
  totalCc.innerHTML = cc;
  total= gb +cc+sugar
totalAll.innerHTML = total
});
// (-/+) for Sugar Cookie
minusSugar.addEventListener("click", () => {
  sugar--;
  totalSugar.innerHTML = sugar;
  total= gb +cc+sugar
totalAll.innerHTML = total
});
addSugar.addEventListener("click", () => {
  sugar++;
  totalSugar.innerHTML = sugar;
  total= gb +cc+sugar
totalAll.innerHTML = total
});