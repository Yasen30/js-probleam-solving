function removeDuplicate(input) {
  const newArray = [];
  // for (let i = 0; i < input.length; i++) {
  //   const element = input[i];
  //   if (newArray.indexOf(element) === -1) {
  //     newArray.push(element);
  //   }
  // }
  for (const element of input) {
    if (newArray.indexOf(element) === -1) {
      newArray.push(element);
    }
  }
  return newArray;
}

const numbers = [14, 15, 16, 48, 45, 47, 48, 14, 15, 16, 1, 2, 58, 36];
const result = removeDuplicate(numbers);
console.log(result);
