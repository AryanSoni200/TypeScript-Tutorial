// Parent Class
class User {
    name: string;
    age: number;
    gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

}

// Child Class
class Employee extends User {
    private employeeId: number;
    position: string;

    constructor(employeeId: number, position: string, name: string, age: number, gender: string) {
        super(name, age, gender); // calls the constructor of the parent class User
        this.employeeId = employeeId;
        this.position = position;
    }

    displayInfo(): void {
        console.log(`Employee ID: ${this.employeeId}, Employee Name: ${this.name}, Position: ${this.position}, Gender: ${this.gender}, Age: ${this.age}`);
    }
}

const emp1 = new Employee(101, "Software Developer", "Aryan Soni", 30, "Male");
emp1.displayInfo();
// emp1.employeeId; // Error: Property 'employeeId' is private and only accessible within class 'Employee'.

export {};