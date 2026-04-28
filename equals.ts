// Topics Pending
// 1. Equals == and ===
// 2. interfaces
// 3. tuples
// 4. intersection

let isMember = true;

if (isMember == true) {
  console.log("Congrats, you just turned adult!!");
}

let a: any = "5"; // not recommended
let b: number = 5;

console.log(a == b); // compares values only
console.log(a === b); // compares value and data-type
