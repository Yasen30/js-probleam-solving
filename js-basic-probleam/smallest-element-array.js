function checkSmallest(number) {
  let smallestNumber = number[0];
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (smallestNumber > element) {
      smallestNumber = element;
    }
  }
  return smallestNumber;
}
const numbers = [40, 58, 35, 47, 45, 56, 47, 54];
const result = checkSmallest(numbers);
console.log("smallest numbers", result);
