//while loop decrement
/* let factorial = 1;
let i = 7;
while (i > 1) {
  factorial = factorial * i;
  i--;
} */
// console.log(factorial);

//function while method decrement factorial
function getFactorial(input) {
  let factorial = 1;
  for (let i = input; i >= 1; i--) {
    factorial = factorial * i;
  }
  return factorial;
}
const myNumber = 7;
const myFactorialCheck = getFactorial(myNumber);
console.log("for loop factorial", myFactorialCheck);
