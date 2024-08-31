class a {
    constructor() {
        this.name = "Muhammad Usman";
    }
    showName() {
        console.log(this.name);
    }
    ;
}
class b extends a {
    constructor() {
        super(...arguments);
        this.age = 10;
    }
    display() {
        console.log(this.name);
    }
}
let abs = new b();
const mnm;
export {};
