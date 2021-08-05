function getFactorial(num) {
  var factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
const firstNumber = getFactorial(15);
console.log("first number factorial", firstNumber);
const secondNumber = getFactorial(12);
console.log("second number factorail", secondNumber);
