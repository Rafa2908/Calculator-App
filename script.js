let numberBtn = document.querySelectorAll(".btn");
let numberDisplay = document.getElementById("num-output");

numberBtn.forEach((button) => {
  button.addEventListener("click", () => {
    numberDisplay.value += button.textContent;
  });
});

let equalBtn = document.querySelector(".equal");
let clearBtn = document.querySelector(".clear");

equalBtn.addEventListener("click", () => {
  numberDisplay.value = eval(numberDisplay.value);
});

clearBtn.addEventListener("click", () => {
  numberDisplay.value = "";
});
