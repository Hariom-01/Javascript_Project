let mydate = document.getElementById("mydate");
let mytask = document.getElementById("mytask");
let result = document.getElementById("result");

document.getElementById("add_task").addEventListener('click', function () {
  if (mytask.value === "" || mydate.value === "" || mytask.value === "" && mydate.value === "") {
    alert("Both fields should be filled");
  }

  else {
    let tasklist = document.createElement('div');
    tasklist.innerHTML = `<li> ${mytask.value} ------> ${mydate.value} <button class="mybutton">Delete</button></li>`;
    result.appendChild(tasklist);
    mydate.value = "";
    mytask.value = "";
  }






})



document.querySelector("#result").addEventListener('click', function (e) {
  if (e.target.tagName === 'BUTTON') {
    console.log(e.target.parentNode);
    let item = e.target.parentNode;
    item.remove();
  }


})

