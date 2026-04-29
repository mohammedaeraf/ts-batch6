// Arrays -> elements of the same type
// we can any number of elements without limit

type User = [number, string]; // tuple
// element may have different types
// array size would be fixed

let user1: User = [101, "Asif"];
let user2: User = [102, "Nadeem"];

console.log(`User 1 ID: ${user1[0]}`);
console.log(`User 1 Name: ${user1[1]}`);

// define a tuple for Product with fields id, title, price

type Product = [number, string, number];

let product1: Product = [10013, "HP Wired Headphone", 2500];
let product2: Product = [10078, "Mouse Pad", 300];


