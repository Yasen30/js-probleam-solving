// function fibonacci(n) {
//   if (n == 0) {
//     return 0;
//   }
//   if (n == 1) {
//     return 1;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// const result = fibonacci(8);
// console.log(result);
function fibonacciSeris(n) {
  if (n == 0) {
    return [0];
  }
  if (n == 1) {
    return [0, 1];
  }
  const fibo = fibonacciSeris(n - 1);
  fibo[n] = fibo[n - 1] + fibo[n - 2];
  return fibo;
}
const result = fibonacciSeris(8);
console.log(result);
