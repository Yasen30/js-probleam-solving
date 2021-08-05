function isLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  }
  return false;
}
const myYear = 2100;
const myYearIsLeapYear = isLeapYear(myYear);
console.log("this year is leap year", myYearIsLeapYear);
