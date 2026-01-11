//greet function
function greet(name:string) {
    return `Hello from ${name}`;
}

//add two number
function sum(num1: number, num2: number) {
    return num1 + num2;
}

//suntract two number with arrow function
let subtract = (a: number, b: number) => a - b;


//strict return function (this function return only string)
function newone(val: string): string {
    return `Hi from ${val}`;
}


let greeting: string = greet("Soni");
let result: number = sum(1, 2);
let result1: number = subtract(2, 1);

console.log(greeting);
console.log(result);
console.log(result1);

export  {};