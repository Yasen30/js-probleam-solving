const buisness = 850;
const minister = 750;
const sochib = 550;
// two value check who is larger
if (buisness > minister) {
  //   console.log("buisnessman er cele borolox");
} else {
  //   console.log("minister eele borolox");
}
//three value check who is largest
if (buisness > minister && buisness > sochib) {
  //   console.log("buisnessman er cele borolox");
} else if (minister > sochib && minister > buisness) {
  //   console.log("minister er cele borolox");
} else {
  //   console.log("sochib er cele borolox");
}
//
const max = Math.max(buisness, minister, sochib);
// console.log(max);

//three param in function and check who is largest
function findLargest(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return "num1 is bigger";
  } else if (num2 > num1 && num2 > num3) {
    return "num2 is bigger";
  } else {
    return "num3 is bigger";
  }
}
const result = findLargest(650, 750, 350);
// console.log(result);

//three param in function and check who is smallest
function checkSmallest(first, second, third) {
  if (first < second && first < third) {
    return "first is smallest";
  } else if (second < first && second < third) {
    return "second is smallest";
  } else {
    return "third is smallest";
  }

  //   const small = Math.min(first, second, third);
  //   return small;
}
const smallestResult = checkSmallest(780, 48, 58);
console.log(smallestResult);
