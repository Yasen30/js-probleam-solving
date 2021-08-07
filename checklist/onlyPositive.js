function onlyPositive(numbers) {
  const newNumber = [];
  for (const number of numbers) {
    if (number < 0) {
      break;
    } else if (number >= 0) {
      newNumber.push(number);
    }
  }
  return newNumber;
}
const numbers = [14, 15, 0, 4, -5, 8, 6];
const result = onlyPositive(numbers);
console.log(result);
