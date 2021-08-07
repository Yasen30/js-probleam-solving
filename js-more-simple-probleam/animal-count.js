/*
10 mile =10
20mile =50
30mile=100  
*/
function animalCount(mile) {
  let animal = 0;
  if (mile > 0 && mile <= 10) {
    const animal = mile * 10;
    return animal;
  } else if (mile > 10 && mile <= 20) {
    const first10 = 10 * 10;
    const last = (mile - 10) * 50;
    const animal = first10 + last;
    return animal;
  } else if (mile > 20) {
    const first10 = 100;
    const second20 = 500 + first10;
    const last = (mile - 20) * 100;
    const animal = last + second20;
    return animal;
  } else if (typeof mile != "number" || mile < 0) {
    return "please enter a positive mile";
  }
}
const result = animalCount(-5);
console.log(result);
