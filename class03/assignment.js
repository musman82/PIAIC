"use strict";
// Q#1: write a program to convert centigrade to farenhight and vise versa
var temprature = 1;
var unit = "C";
var tempResult = "";
if (unit == "C") {
    tempResult = ((temprature * 9 / 5) + 32) + " F";
}
else {
    tempResult = ((temprature - 32) * 5 / 9) + " C";
}
console.log(tempResult);
// Q#2: Write a program that calculates the percentage
var val = 100;
var per = 10;
var perResult = per + "% of " + val + " is : " + (val * per) / 100;
console.log(perResult);
// Q#3: Given the number of days calculate the result in days and weeks
var inputDays = 17;
var days = inputDays % 7;
var weeks = (inputDays - days) / 7;
var weekResult = weeks + " Weaks and " + days + " Days";
console.log(weekResult);
// Q#4: Write a program that calculates the discount for a product based on its price. if the price is above $100 apply a 10% discount, otherwise apply a 5 % discount
var productAmount = 210;
var productDiscount = 0;
if (productAmount > 100) {
    productDiscount = (productAmount * 10) / 100;
}
else {
    productDiscount = (productAmount * 5) / 100;
}
console.log("Discount on Product of amount", productAmount, " is :", productDiscount);
