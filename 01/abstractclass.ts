abstract class Shape {
    abstract area(): number;

    printArea(): void {
        console.log(`Area: ${this.area()}`);
    }
}

class Square extends Shape {
    length: number;

    constructor(length: number) {
        super();
        this.length = length;
    }

    area(): number {
        return this.length * this.length;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Triangle extends Shape {
    base: number;
    height: number;

    constructor(base: number, height: number) {
        super();
        this.base = base;
        this.height = height;
    }

    area(): number {
        return 0.5 * this.base * this.height;
    }
}

const square = new Square(10);
square.printArea();

const circle = new Circle(10);
circle.printArea();

const triangle = new Triangle(10, 5);
triangle.printArea();

export {};