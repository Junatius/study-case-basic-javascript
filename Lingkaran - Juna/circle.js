class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getRadius() {
        console.log("Radius Lingkarannya adalah " + this.radius);
    }

    calculateArea() {
        const area = Math.PI * this.radius ** 2;
        return area.toFixed(2);
    }

    calculateCircumference() {
        const circumference = 2 * Math.PI * this.radius;
        return circumference.toFixed(2);
    }
}

const circle1 = new Circle(7);
circle1.getRadius();
const Area1 = circle1.calculateArea();
const Circumference1 = circle1.calculateCircumference(); 

console.log(`Luas lingkarannya adalah ${Area1} dan Kelilingnya adalah ${Circumference1}`);