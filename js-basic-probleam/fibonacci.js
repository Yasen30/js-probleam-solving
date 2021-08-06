function fibonacciSeris(num) {
  if (typeof num != "number") {
    return "please give a number";
  }
  if (num < 2) {
    return "please enter than a positive number greater than 1";
  }
  let fibonacci = [0, 1];
  for (let i = 2; i < num; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci;
}
const result = fibonacciSeris(8);
console.log(result);
