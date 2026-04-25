## 📘 Assignment: Student Type in TypeScript

### Problem 1: Define a Student Type
**Description:**  
Create a `type` named `Student` with properties:  
- `name` (string)  
- `age` (number)  
- `email` (string)  
- `subjects` (string[])  

Then, declare a variable `student1` of type `Student` and assign sample values. Print the student details using `console.log`.

**Starter Code:**
```typescript
type Student = {
    name: string;
    age: number;
    email: string;
    subjects: string[];
};

let student1: Student = {
    name: "Alice",
    age: 19,
    email: "alice@example.com",
    subjects: ["Math", "Science", "English"]
};

console.log(student1);
```

---

### Problem 2: Add Multiple Students
**Description:**  
Create at least three student objects using the `Student` type.  
Store them in an array called `students`.  
Print all student details in a structured way.

**Starter Code:**
```typescript
let student2: Student = {
    name: "Bob",
    age: 17,
    email: "bob@example.com",
    subjects: ["History", "Geography"]
};

let student3: Student = {
    name: "Charlie",
    age: 20,
    email: "charlie@example.com",
    subjects: ["Physics", "Chemistry", "Math"]
};

let students: Student[] = [student1, student2, student3];

console.log(students);
```

---

### Problem 3: Filter Students by Age
**Description:**  
Write a function that takes the `students` array and returns only those students older than 18.  
Print the filtered list.

**Starter Code:**
```typescript
function filterByAge(students: Student[]): Student[] {
    // TODO: return only students older than 18
    return [];
}

let olderStudents = filterByAge(students);
console.log(olderStudents);
```

---

### Problem 4: Count Subjects
**Description:**  
Write a function that accepts a student and returns the number of subjects they are enrolled in.  
Demonstrate with `student1`.

**Starter Code:**
```typescript
function countSubjects(student: Student): number {
    // TODO: return number of subjects
    return 0;
}

let subjectCount = countSubjects(student1);
console.log(`Number of subjects: ${subjectCount}`);
```
