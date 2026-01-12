class User {
  private age: number;
  protected name: string; // protected can be accessed in derived classes

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  // Getter for age
  get getAge(): number {
    return this.age;
  }

  get getName(): string {
    return this.name;
  }

  // Setter for age // NOTE: in Setter there is no return type
  set setAge(value: number) {
    if (value < 0) {
      throw new Error("Age cannot be Negative");
    } else {
      this.age = value;
    }
  }

  set setName(value: string) {
    this.name = value;
  }
}

class Admin extends User {
  displayInfo(): void {
    // this.age = 18; // Error: Property 'age' is private and only accessible within class 'User'.
    this.name = "Admin User"; // Accessing protected property from parent class
    console.log(`Admin Name: ${this.name}, Age: ${this.getAge}`);
  }
}

const user1 = new User(25, "Aryan");
// user1.age = 26; // Direct access to private property will cause an error
console.log("Initial Age:", user1.getAge);
user1.setAge = 30; // Using setter to update age
console.log("Updated Age:", user1.getAge);
console.log("Name:", user1.getName);
user1.setName = "Aryan Soni";
console.log("Updated Name:", user1.getName);

const admin1 = new Admin(35, "Super Admin");
admin1.displayInfo();

export {};
