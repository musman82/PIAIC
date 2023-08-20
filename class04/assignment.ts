function insertArray(array:string[], index:number, value:string){
    array.splice(index,0,value);
    return array;
}

let shoppingCart:string[]