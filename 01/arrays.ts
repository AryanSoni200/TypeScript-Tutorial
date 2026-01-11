const shape: string[] = [];
const fruits: Array<string> = [];

type data = {
    id: number
    name: string
}

const employee: Array<data> = [];

employee.push({id: 1, name: "Aryan"});
shape.push("Square");
fruits.push("Apple");


console.log(employee[0].name);
console.log(shape);
console.log(fruits);

export {}