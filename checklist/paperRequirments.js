function paperRequirments(
  firstBookQuantity,
  secondBookQuantity,
  thirdBookQuantity
) {
  //Page variable asign
  const firstBookPage = 100;
  const seconBookPage = 200;
  const thirdBookPage = 300;
  const firstBookresult = firstBookPage * firstBookQuantity;
  const secondBookresult = seconBookPage * secondBookQuantity;
  const thirdBookresult = thirdBookPage * thirdBookQuantity;

  const result = firstBookresult + secondBookresult + thirdBookresult;
  return result;
}
const totalPage = paperRequirments(2, 4, 1);
console.log(totalPage);
