//  Q#1 - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.

function printSum(n: number){
    var sum:number = 0;
    for(var i:number = 1; i <= n*2; i++){
        if(i%2==0){
            sum += i;
        }
    }
    console.log("Sum of ", n ," even numbers is:" , sum);
}
printSum(5);

//  Q#2 - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.

function printEvenNumbers(array: number[]){
    for(var i = 0; i < array.length; i++){
        if(array[i]%2==0){
            console.log(array[i]);
        }
    }
}

printEvenNumbers([1,3,5,7,4,6,5,2,8,9]);

//  Q#3 - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers 
//        from them and just leave the odd ones

function removeEvenNumbers(array: number[]){
        for(var i = 0; i < array.length; i++){
        if(array[i]%2==0){
            array.splice(i,1);
            i--;
        }
    }
    console.log(array);
}

removeEvenNumbers([1,3,5,7,9,4,6,5,2,8,7,9,11,25,23,4]);

//  Q#4 - Write a program that defines a function to calculate the area of a circle. The function should take the radius 
//        as input and return the calculated area.

function calculateArea(radius: number):number{
    var area:number = Math.PI * Math.pow(radius, 2);
    return area;
}
console.log("Area of a Circle with Radius ", 10, " is : ",calculateArea(10));

//  Q#5 - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) 
//        from the array.

function removeFailingGrades(array:number[]){
    for(var i = 0; i < array.length; i++){
        if(array[i] < 50){
            array.splice(i,1);
            i--;
        }
    }

    console.log(array);
}

removeFailingGrades([75,18,51,56,78,92,49,50,81,77,90]);

//  Q#6 - Write a program that uses a function to find the largest element in an array of numbers.

function findLargestElement(array: number[]){
    var largestNum:number = 0;
    for(var i = 0; i < array.length; i++){
        if(i==0){
           largestNum = array[i];
        }
        if(array[i] > largestNum){
            largestNum = array[i];
        }
    }
    console.log("Largest number in array is ",largestNum);
}

findLargestElement([10,3,9,11,33,52,4,7,98,71,77,82]);