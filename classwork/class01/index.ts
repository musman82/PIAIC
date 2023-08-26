// npm init -y       To initialize the node project
// npm init          To initialize the node project with the process ask for configuration
// tsc --init        To initialize the type script in the project
// tsc               To compile typescript code into java script
// node filename.js  To execute java script file 

// console.log("String"); Prints the parameter output to terminal.

console.log("Hello world!");

// Variabales
// variables are usd to store data in memory
// var keyword is used tp define variable to store data in memory
// variable name is used to store the ram address of the cells where data is storedbto read it later stage
// we call variabale name to goto the respective location to read data.

// Variabae data type data comes in different types like pictures, movies, text data, numaric data etc
// 
// Variabale name conventions ?

// var variabaleName(variabale) =(assignment operator) "Value" (value of the variabale)

// ; is ued to end the instruction. its best practice.

//var userNAame = "usman";          // Javascript  variable is not type restricted. any value can be stored.
var userName:string ="usman";    // TypeScript  variabale is type restricted. it will take only string data.
console.log(userName);

var num1:number = 2;
var num2:number = 5;
var num3:number = 5;
var result:number = num1+num2+num3;
console.log(result);