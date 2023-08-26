// Q#1: Calculate the area of a rectangle
const calculateRectangleArea = (length: number,width: number)=>{
    return length * width;
}

console.log("Area of a rectangle Length: 10 Width: 20 is Area :",calculateRectangleArea(10,20));

// Q#2: Calculate the volums of a cube
const calculateCubeVolume = (height:number)=>{
    return Math.pow(height,3);
}

console.log("Volume of a cube of Length: 10 is  :",calculateCubeVolume(10));

// Q#3: Check wheather the given number is positive, negative or zero

const checkInteger = (value:number)=>{
    if(value == 0){
        return "Zero";
    }else if(value < 0){
        return "Negative";
    }else if(value > 0){
        return "Positive";
    }
}

console.log("The input number 10 is :",checkInteger(10));

// Q#4: Write a Program that checks if a given number is even or odd
const checkEvenOdd = (num:number)=>{
    if(num%2 == 0){
        return "Even";
    }else{
        return "Odd";
    }
}

console.log("The input number 3 is :",checkEvenOdd(3));


// Q#5: Write a Program that checks elegibity of a person to vote based on age
const checkVotingEligibility = (age:number)=>{
    if(age >= 18){
        return "Person is eligible to vote";
    }else{
        return "Person is not eligible to vote";
    }
}

console.log("The input age 18 is :",checkVotingEligibility(18));

// Q#6: Write a Program that calcultes expession
const calculateExpression = ()=>{
    return (((10+5)+3-2)/(4%3)-7)
}

console.log("Answer of Expession is :",calculateExpression());
