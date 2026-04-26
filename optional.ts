function greetUser(name: string, age?: number): void {
  if (age === undefined) {
    console.log(`Hello ${name}!`);
  } else {
    console.log(`Hello ${name}, your age is ${age}`);
  }
}

// difference between param and argument
greetUser("Abdullaah", 17);
