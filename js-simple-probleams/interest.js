function simpleInterest(p, r, t) {
  const finalAmount = p * (1 + r * t);
  return finalAmount;
}
const blance = 200000;
const rate = 0.1;
const time = 5;
const result = simpleInterest(blance, rate, time);
console.log("your total answer is", result);
