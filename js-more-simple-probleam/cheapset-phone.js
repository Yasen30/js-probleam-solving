const phones = [
  { name: "samsung", price: 25000, ram: "4gb" },
  { name: "apple", price: 120000, ram: "8gb" },
  { name: "walton", price: 20000, ram: "4gb" },
  { name: "xiomi", price: 25000, ram: "6gb" },
  { name: "motorola", price: 24000 },
];
let chipestPrice = phones[0].price;
for (const phone of phones) {
  if (chipestPrice > phone.price) {
    chipestPrice = phone.price;
  }
}
console.log(chipestPrice);

let largestPrice = phones[0].price;
for (const phone of phones) {
  if (phone.price > largestPrice) {
    largestPrice = phone.price;
  }
}
console.log(largestPrice);
