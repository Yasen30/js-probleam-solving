function checkLargestNumber(num) {
  let largestNumber = num[0];
  for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if (element > largestNumber) {
      largestNumber = element;
    }
  }
  return largestNumber;
}

const numbers = [58, 14, 15, 16, 47, 58, 48];
const result = checkLargestNumber(numbers);
console.log(result);
