let id: string | number;

id = 3
console.log(id);
id = "yoo"
console.log(id);

function getDb(id: string | number | boolean) {
    if (typeof id === "string") {
        console.log(id.toLowerCase());
    } else if (typeof id === "number") {
        console.log(id + 2);
    } else {
        console.log(id);
    }
}

getDb("ARYAN");
getDb(2);
getDb(true);

// array
const data: (number | string)[] = [1, "Hello", 2]
console.log(data);

export {}