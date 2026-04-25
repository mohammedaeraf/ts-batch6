// ===============================
// Assignment: Student Type in TypeScript
// ===============================

// Problem 1: Define a Student Type
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
  subjects: ["Math", "Science", "English"],
};

console.log("Problem 1:");
console.log(student1);

// -------------------------------
// Problem 2: Add Multiple Students
let student2: Student = {
  name: "Bob",
  age: 17,
  email: "bob@example.com",
  subjects: ["History", "Geography"],
};

let student3: Student = {
  name: "Charlie",
  age: 20,
  email: "charlie@example.com",
  subjects: ["Physics", "Chemistry", "Math"],
};

let students: Student[] = [student1, student2, student3];

console.log("\nProblem 2: All Students");
students.forEach((s) => {
  console.log(
    `${s.name}, Age: ${s.age}, Email: ${s.email}, Subjects: ${s.subjects.join(", ")}`,
  );
});

// -------------------------------
// Problem 3: Filter Students by Age
function filterByAge(students: Student[]): Student[] {
  return students.filter((s) => s.age > 18);
}

let olderStudents = filterByAge(students);
console.log("\nProblem 3: Students older than 18");
olderStudents.forEach((s) => console.log(s.name));

// -------------------------------
// Problem 4: Count Subjects
function countSubjects(student: Student): number {
  return student.subjects.length;
}

let subjectCount = countSubjects(student1);
console.log(`\nProblem 4: ${student1.name} has ${subjectCount} subjects.`);

// -------------------------------
// Problem 5: Search Student by Email
function searchByEmail(students: Student[], email: string): Student | null {
  let found = students.find((s) => s.email === email);
  return found ? found : null;
}

let result = searchByEmail(students, "charlie@example.com");
console.log("\nProblem 5: Search by Email");
if (result) {
  console.log("Student found:", result);
} else {
  console.log("Student not found");
}

// -------------------------------
// Problem 6: Display All Subjects
function displayAllSubjects(students: Student[]): void {
  students.forEach((s) => {
    console.log(`${s.name}'s subjects:`);
    s.subjects.forEach((sub) => console.log(" - " + sub));
  });
}

console.log("\nProblem 6: Display All Subjects");
displayAllSubjects(students);
