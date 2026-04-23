# 🧑‍💻 Assignment: Array Calculations in TypeScript

## 🎯 Objective

* Practice working with arrays in TypeScript
* Build reusable functions
* Handle edge cases like empty arrays
* Strengthen logic using loops / array methods

---

## 📌 Problem 1: Sum of Array Elements

### 📝 Task

Write a function that:

* Accepts an array of numbers
* Returns the **sum of all elements**

### 📥 Example

```ts
sumArray([1, 2, 3, 4, 5]); // Output: 15
```

### 📋 Requirements

* Function must work for arrays of **any size**
* Use TypeScript types properly
* Handle edge cases:

  * Empty array → return `0`
  * Array with negative numbers

---

### 💡 Function Signature

```ts
function sumArray(arr: number[]): number {
  // your code here
}
```

---

### 🧪 Test Cases

```ts
sumArray([10, 20, 30]);     // 60
sumArray([]);               // 0
sumArray([-1, -2, 3]);      // 0
```

---

## 📌 Problem 2: Find Maximum Element (Similar Problem)

### 📝 Task

Write a function that:

* Accepts an array of numbers
* Returns the **largest (maximum) element**

---

### 📥 Example

```ts
maxArray([3, 7, 2, 9, 5]); // Output: 9
```

---

### 📋 Requirements

* Must work for arrays of any size
* Handle edge cases:

  * Empty array → return `null` (or handle appropriately)
  * Array with negative numbers

---

### 💡 Function Signature

```ts
function maxArray(arr: number[]): number {
  // your code here
}
```

---

### 🧪 Test Cases

```ts
maxArray([10, 20, 30]);   // 30
maxArray([-5, -2, -10]);  // -2
maxArray([]);             // null
```
