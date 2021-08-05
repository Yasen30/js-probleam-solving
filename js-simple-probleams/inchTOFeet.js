//inchesh to feet
function inchToFeet(icnches) {
  feet = icnches / 12;
  return feet;
}
var inch = inchToFeet(14);
console.log("feet", inch);

//feet to inches
function feetToInch(feet) {
  var icnch = feet * 12;
  return icnch;
}
var feet = feetToInch(11);
console.log("inch", feet);
