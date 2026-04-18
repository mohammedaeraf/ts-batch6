// JS => Loosely Typed Language
// NaN => Not a Number
let n = 10;
n = "hello";
console.log(n * 5);

function calcArea(l, b) {
  let result = l * b;
  return result;
}
let area = calcArea(10, 5);
console.log(`Area = ${area}`);

area = calcArea(10, "5 metres");
console.log(`Area = ${area}`);

let fruits = ["apple", "banana", "mango"];
fruits.push("watermelon");
fruits.push(125)
console.log(fruits);
