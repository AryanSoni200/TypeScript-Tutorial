const fruits: Array<string> = [];
const id: Array<number> = [];
const vegies: string[] = [];
const price: number[] = [];

// Generics in function
function one<Type> (val: Type): Type {
    return val;
}

// another way to define Generic function
function two<T> (val: T): T {
    return val;
}

// Generics get the return type according to input variable
console.log(one(2));
console.log(two(true));

const hello = (name: string) => {
    return name;
}

console.log(hello("User"));

export {};