// Interfaces are loose form of classes that define the structure of an object.
// They are used to type-check whether an object adheres to a specific structure.

interface User {
    name: string,
    email: string,
    age: number,
    gender: string,
    startTrial: () => string
}

interface User {
    mobile: number // This will merge with the previous User interface
}

// type User1 = {
//     name: string,
//     email: string,
//     age: number,
//     gender: string
// }

// typr User1 = {
//     mobile: number // This will throw an error as types do not support declaration merging
// }

// Type V/S Interface
// 1. Type can be used to define primitive types, union types, tuples, and other types, whereas interfaces are primarily used to define the structure of objects.
// 2. Interfaces can be extended using the 'extends' keyword, allowing for the creation of complex types through inheritance. Types can achieve similar functionality using intersection types (&), but interfaces are generally more straightforward for this purpose.
// 3. Interfaces support declaration merging, meaning if you declare the same interface multiple times, TypeScript will merge them into a single interface. Types do not support this feature; redeclaring a type with the same name will result in an error.

interface Admin extends User {
    role: string
}

const admin1: Admin = {
    name: "Admin",
    email: "admin@gmail.com",
    age: 30,
    gender: "male",
    role: "superadmin",
    startTrial: () => {
        return "Trial started for admin";
    },
    mobile: 9876543210
}

const user1: User = {                           
    name: "User",
    email: "user@gmail.com",
    age: 10,
    gender: "male",
    startTrial: () => {
        return "Trial started";
    },
    mobile: 1234567890
}

user1.age = 20; // Valid
console.log(user1.startTrial());

console.log(user1);
console.log(admin1);

export {};