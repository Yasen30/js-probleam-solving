function add(num1, num2) {
  if (typeof num1 != "number") {
    return "please input a positive number";
  }
  if (typeof num2 != "number") {
    return "please input a positive number";
  }
  const sum = num1 + num2;
  return sum;
}

function multiply(num1, num2) {
  if (typeof num1 != "number") {
    return "please input a positive number";
  }
  if (typeof num2 != "number") {
    return "please input a positive number";
  }
  const result = num1 * num2;
  return result;
}
const firstResult = multiply(13, "45");
console.log(firstResult);
