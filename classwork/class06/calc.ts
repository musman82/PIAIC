class a {
    protected name:string = "Muhammad Usman";
    public showName(){
        console.log(this.name);
    };
}
class b extends a {
    age:number = 10;
    display(){
        console.log(this.name);
    }
}

let abs = new b();
