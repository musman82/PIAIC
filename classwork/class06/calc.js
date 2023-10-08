class Shape {
    constructor(_height, _width) {
        this.height = 0;
        this.width = 0;
        this.height = _height;
        this.width = _width;
    }
    ;
    CalculateArea() {
        return (this.height * this.width);
    }
    ;
}
class Cube extends Shape {
    constructor(_height, _width, _length) {
        super(_height, _width);
        this.lenght = 0;
        // this.height = _height;
        // this.width = _width;
        this.lenght = _length;
    }
    ;
    CalculateArea() {
        return (this.height * this.width * this.lenght);
    }
    ;
}
let cube = new Cube(10, 10, 10);
console.log(cube.CalculateArea());
export {};
