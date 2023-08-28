// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where 
// each number is multiplied by 2.
let array1:number[] = [1, 2, 3, 4,5];

let result1:number[] = array1.map((value)=>value*2);

console.log("Q#1: The Original Array : ",array1);
console.log("A#1 Array afte multiply by 2 with map method :",result1);


// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to 
// create a new array containing only the fruits with more than 5 characters.

let array2:string[] = ["apple", "banana", "cherry", "date", "grape"];
let result2:string[] = array2.filter((value)=>{
    if(value.length>5){
        return true;
    }
});

console.log("Q#2: The Original Array : ",array2);
console.log("A#2 Array afte filtering fruite with length > 5 with filter method :",result2);


// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together 
// to create a new array containing the squares of even numbers.

let array3:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result3:number[] = array3.filter((value)=>{
    if(value%2===0){
        return true;
    }
}).map((value)=>Math.pow(value, 2));

console.log("Q#3: The Original Array : ",array3);
console.log("A#3 Array afte filtering even number with filter method and making square with map method:",result3);


// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array 
// where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.

let array4:number[] = [0, 10, 20, 30, 40];
let result4:number[] = array4.map((value)=>((value * 9)/5) + 32);

console.log("Q#4: The Original Array : ",array4);
console.log("A#4 Array afte converting temprature to Fahrenheit with map method:",result4);


// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to 
// create a new array containing the doubled values of odd numbers.

let array5:number[] = [3, 6, 9, 12, 15, 18];
let result5:number[] = array5.filter((value)=>{
if(value%2!==0){
    return true;
}
}).map((value)=>value*2);


console.log("Q#5: The Original Array : ",array5);
console.log("A#5 Array afte filtering odd number with filter method and making double with map method:",result5);


// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an 
// exclamation mark at the end, e.g., "Alice!".

let array6:string[] = ["Alice", "Bob", "Charlie", "David", "Emily"];

console.log("Q#6: The Original Array: ",array6)
console.log("Print With ForEach Method");
array6.forEach((value)=>{
    console.log(value+'!');
});