class Shape {
    height: number = 0;
    width: number = 0;
    constructor(_height: number, _width: number){
        this.height = _height;
        this.width = _width;
    };
    CalculateArea(){
        return (this.height * this.width);
    };
}

class Cube extends Shape {
    lenght: number = 0;
    constructor( _height: number,_width: number,_length: number){
        super( _height,_width);
        this.lenght = _length;
    };
    CalculateArea(){
        return (this.height * this.width*this.lenght);
    };
}


let cube = new Cube(10,10,10);

console.log(cube.CalculateArea());

