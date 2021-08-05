// let factorial = 1;
// let i = 1;
// while (i <= 7) {
//   factorial = factorial * i;
//   i++;
// }
// console.log(factorial);

function getFactorial(number) {
  let factorial = 1;
  let i = 1;
  while (i <= number) {
    factorial = factorial * i;
    i++;
  }
  return factorial;
}
const myNumber = 7;
const factorialCheck = getFactorial(myNumber);
console.log("total result", factorialCheck);
