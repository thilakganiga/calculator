let input = "";
let result = "";

function addInput(value) {
  input += value;
  document.getElementById("screen").value = input;
}

function clearScreen() {
  input = "";
  result = "";
  document.getElementById("screen").value = "";
}

function backspace() {
  input = input.slice(0, -1);
  document.getElementById("screen").value = input;
}

function calculate() {
  try {
    result = eval(input);
    document.getElementById("screen").value = result;
    input = result;
  } catch (e) {
    alert("Invalid calculation");
  }
}
