"use strict";
let sum = 0;
let list = [];
for (let i = 0; i < 100; i++) {
    if (i % 5 == 0) {
        sum = sum + i;
        list.push(i);
    }
}
console.log("Result: ", sum, list);
// Create a function that takes an array of numbers as parameter. use a while loop to calculate and return sum of all the numbers in the array
function calculateSum(list) {
    let sum = 0;
    let i = 0;
    while (i < list.length) {
        sum += list[i];
        i++;
    }
    return sum;
}
console.log("sum of array [1,2,3,4,5,6,7,8,9,10]:", calculateSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// Create a function that takes a positive integer as a parameter and uses a while loop to calculate and display the factorial of that number
function calculateFactorial(num) {
    let factorial = 1;
    while (num >= 1) {
        factorial *= num;
        num--;
    }
    return factorial;
}
console.log("10! = ", calculateFactorial(5));
