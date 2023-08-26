"use strict";
// Q#1: Calculate the area of a rectangle
var length = 10;
var width = 20;
var rectangleArea = length * width;
console.log("Rectangle", rectangleArea);
// Q#2: Calculate the volums of a cube
var height = 10;
var cubeVolume = height * height * height;
console.log("Cube Volume", cubeVolume);
// Q#3: Check wheather the given number is positive, negative or zero
var num = 15;
if (num == 0) {
    console.log("Number is zero");
}
else if (num > 0) {
    console.log("Number is positive");
}
else {
    console.log("Number is negative");
}
// Q#4: Write a Program that checks if a given number is even or odd
var num1 = 7;
if (num1 % 2 == 0) {
    console.log("Number is even");
}
else {
    console.log("Number is odd");
}
// Q#5: Write a Program that checks elegibity of a person to vote based on age
var age = 17;
if (age >= 18) {
    console.log("Person is eligible for voting");
}
else {
    console.log("Person is not eligible for voting");
}
// Q#6: Write a Program that calcultes expession
var result = (((10 + 5) + 3 - 2) / (4 % 3) - 7);
console.log("Expression Result:", result);
