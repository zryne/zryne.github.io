const BtnAdd = document.querySelector(".btn-add");
const DivContainer = document.getElementById("div-container");

BtnAdd.addEventListener("click", AddNew);

function AddNew() {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = "<b>Hello</b>";
  console.log("add");
  newDiv.classList.add("div-shadow");
  DivContainer.appendChild(newDiv);
}

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}