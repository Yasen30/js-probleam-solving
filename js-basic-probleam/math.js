// const myNumber = -10;
// const output = Math.abs(myNumber);

const myNumber = 5.9996;
// const output = Math.ceil(myNumber);
// const output = Math.floor(myNumber);

// const output = Math.round(myNumber);
const output = Math.random() * 6;
const rounded = Math.round(output);
// console.log(rounded);
const selcted = [];
for (let i = 0; i < 10; i++) {
  const random = Math.random() * 100;
  const picked = Math.round(random);
  if (selcted.indexOf(picked) === -1) {
    selcted.push(picked);
  }
}
console.log(selcted);
