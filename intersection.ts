type Person = {
    name: string;
    age: number;
    phoneNumber: string
}

type Employee = {
    employeeId: string;
    department?: string;
}

type EmployeeProfile = Person & Employee;

const emp1: EmployeeProfile = {
    name: "Arif Attar",
    age: 40,
    phoneNumber: "+91-8979797999",
    employeeId: "A001014",
}




