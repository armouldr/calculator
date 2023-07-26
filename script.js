function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0) {
    return "ERROR";
  }
  return a / b;
}

function operate(nb1, operator, nb2) {
  switch (operator) {
    case "+":
      add(nb1, nb2);
      break;

    case "-":
      subtract(nb1, nb2);
      break;

    case "*":
      multiply(nb1, nb2);
      break;

    case "/":
      divide(nb1, nb2);
      break;
  }
}
