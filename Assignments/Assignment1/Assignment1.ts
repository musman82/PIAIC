//  Q#1 - Create a function that takes an array, an index, and a value as parameters. Inside the function, 
//        use the splice method to insert the value at the specified index in the array. Return the modified array.

function insertArray(arr: string[], index: number, value:string):string[]{
    var arrResult:string[] = [];
    arrResult=arr;
    arrResult.splice(index,0,value);
    return arrResult;
}

console.log(insertArray(["A","B","C","E","F"],3,"D"));

//  Q#2 - Implement a simple shopping cart program using an array. Create functions to add items, 
//        remove items, and update quantities using the splice method. Print the cart's contents after each operation

var shoppingCart:string[]= [ 'LCD TV', 'Android Mobile', 'IPhone', 'IPad' ];

function addItem(itemName:string){
    shoppingCart.push(itemName);
    console.log(`Item added: ${itemName}`);
    console.log(shoppingCart);
}

function removeItem(itemName:string){
    for(var i = 0; i < shoppingCart.length-1; i++){
        if(shoppingCart[i] == itemName){
            shoppingCart.splice(i, 1);
        }
    }
    console.log(`Item Removed: ${itemName}`);
    console.log(shoppingCart);
}

function updateQty(itemName:string, quantity:number){
    for(var i = 0; i < shoppingCart.length-1; i++){
        if(shoppingCart[i] == itemName){
            shoppingCart[i] = `${itemName}  Qty:${quantity}`;
        }
    }
    console.log(`Item Qty Updated`);
    console.log(shoppingCart);
}
addItem("Mango");
removeItem("IPhone");
updateQty("LCD TV",10);

// Q#3 - Write a program that uses a while loop to print the first 25 integers.

    var i:number = 1;
    while (i <= 25) {
        console.log(i);
        i++;
    }

//  Q#4 - Write a program that uses a while loop to print the first 10 even numbers.
    var numCount:number = 0;
    var evenIndex:number = 0;

    while(numCount <= 10) {
        if(evenIndex%2==0) {
            console.log(numCount," : ",evenIndex);
            numCount++;
        }
        evenIndex++;
    }

//  Q#5 - Create a function that takes a positive integer as parameter and uses a while loop to calculate and 
//        return the factorial of that number.

function factorial(pNumber: number):number {
    var result:number = 0;
    if(pNumber <=0){
        console.log("Please enter a positive integer");
        result = 0;
    }else{
        result = 1;
        while(pNumber>=1){
            result = result*pNumber;
            pNumber--;
        }
    }
    return result;
}

console.log(factorial(5));

//  Q#6 - Write a program having an array of numbers if the number is negative it should remove the negative number 
//        from the array.

function removeNegativeNumber(array: number[]){
    var count = array.length;
    for(var i = 0; i < count; i++){
        if(array[i] < 0){
            array.splice(i,1);
            count--;
        }
    }
    console.log(array);
}

removeNegativeNumber([-1,1,2,3,4,-1,5,6,7,-1,8,9]);

//  Q#7 - Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return 
//    the sum of all the numbers in the array.

function calculateSum(array:number[]):number{
    var sum:number = 0;
    var i:number = 0;
    while(i<array.length){
        sum += array[i];
        i++
    } 
    return sum;
}
console.log(calculateSum([1,2,3,4,5,6,7,8,9,10]));

//  Q#8 - Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each 
//        temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array.
//        Use a while loop to perform the conversion for each temperature.

function convertTemperatureToFahrenheit(temperatureC: number[]){
    var temperatureF:number[] =[];
    var i:number = 0;
    while (i < temperatureC.length){
        temperatureF.push(((temperatureC[i]*9)/5)+32);
        i++;
    }
    console.log(temperatureF);
}

console.log(convertTemperatureToFahrenheit([32,33,34,35,36,37,38,39,40,41,42,43,44]));