
const random = document.getElementById("random");
const counter = document.getElementById("counter");
let min = 1;
let max = 6;

let count;
random.onclick = function () {
  let count = Math.floor(Math.random() * max) + min;
  counter.textContent = count;
}