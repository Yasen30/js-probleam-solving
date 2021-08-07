function paperRequirments(
  firstBookQuantity,
  secondBookQuantity,
  thirdBookQuantity
) {
  firstBookPage = 100;
  seconBookPage = 200;
  thirdBookPage = 300;
  const firstBookresult = firstBookPage * firstBookQuantity;
  const secondBookresult = seconBookPage * secondBookQuantity;
  const thirdBookresult = thirdBookPage * thirdBookQuantity;

  const result = firstBookresult + secondBookresult + thirdBookresult;
  return result;
}
const totalPage = paperRequirments(2, 4, 1);
console.log(totalPage);
