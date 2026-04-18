let x: number = 100;
// x = "Ninety";
console.log(x);

let title:string = "HP Laptop 15.6 i5Core 1TB";

let isMember: boolean = true;
isMember = false;

function calculateArea(l:number, b:number) : number {
    let result:number = l * b;
    return result;
}

let area:number = calculateArea(10,5);
console.log(`Area = ${area}`);

area = calculateArea(10, "5 meter");
area = calculateArea(10);


