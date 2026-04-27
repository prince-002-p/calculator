function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch {
    alert("Invalid Input");
  }
}
document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
    appendValue(key);
  } 
  else if (key === "Enter") {
    calculate();
  } 
  else if (key === "Backspace") {
    document.getElementById("display").value =
      document.getElementById("display").value.slice(0, -1);
  } 
  else if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});
