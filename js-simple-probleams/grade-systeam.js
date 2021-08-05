function grade(number) {
  if (number >= 80 && number <= 100) {
    return "A+";
  } else if (number >= 70 && number <= 79) {
    return "A";
  } else if (number >= 60 && number <= 69) {
    return "A-";
  } else if (number >= 50 && number <= 59) {
    return "B";
  } else if (number >= 40 && number <= 49) {
    return "C";
  } else if (number >= 33 && number <= 39) {
    return "D";
  } else if (number >= 0 && number <= 32) {
    return "F";
  } else {
    return "Please enter your valid number";
  }
}
const result = grade(60);
console.log("your result is", result);
