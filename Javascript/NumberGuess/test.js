let randomnum;
let guesses;
let flag;
function randomnumGenerator() {
  randomnum = Math.floor(Math.random() * 100) + 1;
  console.log(randomnum);
  guesses = 0;

}

randomnumGenerator();



const check = document.getElementById("check");

check.onclick = function () {
  let guessed_number = Number(document.getElementById("input").value);

  if (guessed_number == 0) {
    document.getElementById("result").textContent = `Result: Enter a number `;

  }
  if (guessed_number == randomnum) {


    document.getElementById("result").textContent = `Result: Yay!!🎉🎉you guessed it `;









  }
  else if (guessed_number > randomnum && guessed_number != 0) {
    guesses += 1;
    document.getElementById("result").textContent = `Result: Too high...Try again with lower number `;
  }
  else if (guessed_number < randomnum && guessed_number != 0) {
    guesses += 1;
    document.getElementById("result").textContent = `Result: Too low...Try again with higher number `;
  }
  document.getElementById("no.of guesses").textContent = `No.of guesses: ${guesses}`;
}

document.getElementById("resetbtn").onclick = function () {

  document.getElementById("no.of guesses").textContent = `No.of guesses: 0`;
  document.getElementById("result").textContent = `Result: `;
  randomnumGenerator();
}