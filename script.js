"use strict";

// #1
let total = 0;
const totalParagraph = document.querySelector("#challenge1 p");
const cola = document.querySelector("#cola");
const peanuts = document.querySelector("#peanuts");
const chocolate = document.querySelector("#chocolate");
const fruit = document.querySelector("#fruit");

cola.addEventListener("click", () => {
  total += 2;
  totalParagraph.textContent = `$${total}.00`;
});

peanuts.addEventListener("click", () => {
  total += 3;
  totalParagraph.textContent = `$${total}.00`;
});

chocolate.addEventListener("click", () => {
  total += 4;
  totalParagraph.textContent = `$${total}.00`;
});

fruit.addEventListener("click", () => {
  total += 6;
  totalParagraph.textContent = `$${total}.00`;
});

// #2

const form = document.querySelector("form");
const coinContainer = document.querySelector("#coin-container");
const removeCoin = document.querySelector("#coin-container li");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const howMany = document.querySelector("#howMany");
  const whichCoin = document.querySelector("#whichCoin");
  for (let i = 0; i < parseInt(howMany.value); i++) {
    const coin = document.createElement("li");
    coin.classList.add("coin", whichCoin.value);
    coin.textContent = whichCoin.value;
    coinContainer.append(coin);
  }
  howMany.value = "";
  whichCoin.value = "";
});

// coinContainer.addEventListener("click", () => {
//   removeCoin.classList.remove("hidden");
// });

// #3
const lightBulb = document.querySelector("#challenge3 p");
const onButton = document.querySelector("#on-button");
const offButton = document.querySelector("#off-button");
const toggleButton = document.querySelector("#toggle-button");
const endButton = document.querySelector("#end-button");

onButton.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "yellow";
});

offButton.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "dimgray";
});

toggleButton.addEventListener("click", () => {
  if (lightBulb.style.backgroundColor === "yellow") {
    lightBulb.style.backgroundColor = "dimgray";
  } else {
    lightBulb.style.backgroundColor = "yellow";
  }
});

endButton.addEventListener("click", () => {
  lightBulb.div.removeChild(p);
});
