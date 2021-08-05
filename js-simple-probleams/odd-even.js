//is even function
function isEven(input) {
  if (input % 2 == 0) {
    return true;
  }
  return false;
}
const myNumber = 13;

const isMyNumberEven = isEven(myNumber);
console.log("is my number even", isMyNumberEven);

//is odd function
function isOdd(input) {
  if (input % 2 == 1) {
    return true;
  }
  return false;
}
const isMyNumberOdd = isOdd(myNumber);
console.log("is my number odd", isMyNumberOdd);
