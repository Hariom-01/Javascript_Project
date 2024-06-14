const myh1 = document.querySelector("h1");
const button = document.querySelector("#changeColor");
const stopButton = document.querySelector("#stop");
let myarr = ["grey", "white", "blue", "yellow"];
let index = 0;
let changeme;

const changeText = function () {
  if (index >= myarr.length) {
    index = 0;
  }
  const color = myarr[index];
  myh1.innerHTML = color;
  document.body.style.backgroundColor = color;
  index++;
  changeme = setTimeout(changeText, 2000);
};

// button.addEventListener('click', changeText());
changeText();

stopButton.addEventListener('click', function () {
  clearTimeout(changeme);

});
