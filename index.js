class Circle {
    radius;
    color;
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        return this.radius;
    }
    getArea() {

        return Math.PI * this.radius * this.radius;
    }
}
let circle = new Circle(+prompt("Nhập bán kinh vào",""));
let radius = circle.getRadius();
let area = circle.getArea();
alert("radius : " + radius + "; area: " + area);