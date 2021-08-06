var first = 5;
var second = 7;
console.log(first, second);
// var temp = first;
// first = second;
// temp = second;
// console.log(first, second);

//destructuring
[first, second] = [second, first];
console.log(first, second);
//name swap
var firstName = "rafi";
var secondName = "rakib";
console.log(firstName, secondName);
var temp = first;
first = second;
second = first;
// console.log(firstName, secondName);

//destructring name swap
[firstName, secondName] = [secondName, firstName];
console.log(firstName, secondName);
