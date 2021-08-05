//celcius to farenheit
function celciusToFarenheit(celcius) {
  let farenheit = celcius * (9 / 5) + 32;
  return farenheit;
}
const celciusResult = celciusToFarenheit(7);
console.log("celciusResult", celciusResult);

const celciusSecondResult = celciusToFarenheit(8);
console.log("celciusSecondResult", celciusSecondResult);

//farenheit to celcius
function farenhitToCelcius(farenhit) {
  const celcius = ((farenhit - 32) * 5) / 9;
  return celcius;
}
const farenhitResult = farenhitToCelcius(98);
console.log("farenhit result", farenhitResult);
