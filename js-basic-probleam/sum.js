const numbers = [15, 17, 4, 8, 48, 5, 85, 16, 54, 18, 58];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  sum = element + sum;
}
console.log("sum using for loop", sum);

function totalArrays(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    const element = num[i];
    sum = sum + element;
  }
  return sum;
}
const result = totalArrays(numbers);
console.log("sum using array", result);
