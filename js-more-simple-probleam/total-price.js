const products = [
  { name: "laptop", price: 50000, quantity: 1 },
  { name: "mobile", price: 25000, quantity: 1 },
  { name: "shirt", price: 500, quantity: 3 },
];
function productTotal(products) {
  let total = 0;
  for (const product of products) {
    sum = product.price * product.quantity;
    total = sum + total;
  }

  return sum;
}
const result = productTotal(products);
console.log(result);
