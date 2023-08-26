// Q#1: write a program to convert centigrade to farenhight and vise versa

var temprature:number = 1;
var unit:string = "C";
var tempResult:string = "";

if (unit == "C"){
    tempResult= ((temprature*9/5) +32) + " F";
}else{
    tempResult = ((temprature-32)*5/9) + " C";
}
console.log(tempResult);

// Q#2: Write a program that calculates the percentage
var val:number = 100;
var per:number = 10;
var perResult:string = per + "% of "+val +" is : "+(val*per)/100;

console.log(perResult);

// Q#3: Given the number of days calculate the result in days and weeks
var inputDays:number = 17;
var days:number = inputDays%7;
var weeks:number = (inputDays - days)/7;
var weekResult:string = weeks+" Weaks and "+ days+" Days";
console.log(weekResult);

// Q#4: Write a program that calculates the discount for a product based on its price. if the price is above $100 apply a 10% discount, otherwise apply a 5 % discount
var productAmount:number = 210;
var productDiscount:number = 0;

if(productAmount > 100){
    productDiscount = (productAmount *10)/100;
}else{
productDiscount = (productAmount *5)/100;
}

console.log("Discount on Product of amount",productAmount," is :", productDiscount);


