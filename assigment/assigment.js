//seerToMon function
function seerToMon(seer) {
  //error condition
  if (typeof seer != "number") {
    return "please input a number";
  }
  //error condition
  else if (seer < 0) {
    return "please input a positive a number";
  }
  //else
  else {
    const mon = seer / 40;
    return mon;
  }
}
//seerToMon function call
const mySeer = seerToMon(80);
console.log(mySeer);
//totalSales function
function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
  //per price variable asign
  const shirtPerPrice = 100;
  const pantPerPrice = 200;
  const shoePerPrice = 500;
  //first error condition
  if (
    typeof shirtQuantity != "number" ||
    typeof pantQuantity != "number" ||
    typeof shoeQuantity != "number"
  ) {
    return "plese enter a number";
  }
  //second error condition
  else if (shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0) {
    return "please enter a positive a number";
  }
  //else
  else {
    const shirtTotalPrice = shirtPerPrice * shirtQuantity;
    const pantTotalPrice = pantPerPrice * pantQuantity;
    const shoeTotalPrice = shoePerPrice * shoeQuantity;
    const totalAllPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;
    return totalAllPrice;
  }
}
//totalSales function call
const Quantity = totalSales(1, 0, 1);
console.log(Quantity);
// deliveryCost function
function deliveryCost(tshirtQuantity) {
  //first error condition
  if (tshirtQuantity < 0) {
    return "please enter a positive a quantity number";
  }
  // second error condition
  else if (typeof tshirtQuantity != "number") {
    return "please enter a right information";
  }
  // less than 100 condition
  else if (tshirtQuantity <= 100) {
    const totalDeliveryCost = tshirtQuantity * 100;
    return totalDeliveryCost;
  }
  // less than 200 condition
  else if (tshirtQuantity <= 200) {
    const first100DeliveryCost = 100 * 100;
    const remainingQuantity = tshirtQuantity - 100;
    const nextDeliveryCost = remainingQuantity * 80;
    const totalDeliveryCost = first100DeliveryCost + nextDeliveryCost;
    return totalDeliveryCost;
  }
  //else
  else {
    const first100DeliveryCost = 100 * 100;
    const next200DeliveryConst = 100 * 80;
    const remainingQuantity = tshirtQuantity - 200;
    const lastDelveriyCost = remainingQuantity * 50;
    const totalDeliveryCost =
      first100DeliveryCost + next200DeliveryConst + lastDelveriyCost;
    return totalDeliveryCost;
  }
}
// deliveryCost function call
const totalResult = deliveryCost(100);
console.log(totalResult);
// perfectFriend function
function perfectFriend(names) {
  //error condition
  if (typeof names != "object") {
    return "plese give me right information";
  }
  //else condition
  else {
    let perfectFriendName = "";
    // for loop
    for (const name of names) {
      if (name.length == 5) {
        perfectFriendName = name;
        return perfectFriendName;
      }
    }
  }
}
// variable asign
const names = ["sajjad", "mohammad", "hablu", "jallu", "kallu", "hassan"];
// perfectFriend function call
const perfectfriendNameResult = perfectFriend(names);
console.log(perfectfriendNameResult);
