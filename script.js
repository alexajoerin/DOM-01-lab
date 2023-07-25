"use strict";

// #1
let total = 0;
const totalParagraph = document.querySelector("#total");
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

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const howMany = document.querySelector("#howMany");
//   const whichCoin = document.querySelector("#whichCoin");
//   for (let i = 0; i < parseInt(howMany.value); i++) {
//     const coin = document.createElement("li");
//     // this line allows the id to be targeted in CSS
//     coin.classList.add("coin", whichCoin.value);
//     coin.textContent = whichCoin.value;
//     coinContainer.append(coin);
//   }
//   howMany.value = "";
//   whichCoin.value = "";
// });

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const howMany = document.querySelector("#howMany");
  const whichCoin = document.querySelector("#whichCoin");
  for (let i = 0; i < parseInt(howMany.value); i++) {
    const coin = document.createElement("li");
    coin.classList.add("coin", whichCoin.value);
    coin.textContent = whichCoin.value;
    // newCoin.setAttribute("data-index", i);
    coinContainer.append(coin);
    coin.addEventListener("click", () => {
      coin.remove();
    });
  }
  howMany.value = "";
  whichCoin.value = "";
});

// coinContainer.addEventListener("click", () => {
//   removeCoin.classList.remove("hidden");
// });

// #3
const lightBulb = document.querySelector("#bulb");
const onButton = document.querySelector("#on-button");
const offButton = document.querySelector("#off-button");
const toggleButton = document.querySelector("#toggle-button");
const endButton = document.querySelector("#end-button");
const lightButtons = document.querySelectorAll("#challenge3 button");

onButton.addEventListener("click", () => {
  lightBulb.classList.add("on");
});

offButton.addEventListener("click", () => {
  lightBulb.classList.remove("on");
});

toggleButton.addEventListener("click", () => {
  lightBulb.classList.toggle("on");
});

endButton.addEventListener("click", () => {
  lightBulb.remove();
  //   lightButtons.forEach((item) => {
  //     item.disabled = true;
  //   });
  onButton.disabled = true;
  offButton.disabled = true;
  toggleButton.disabled = true;
  endButton.disabled = true;
});
