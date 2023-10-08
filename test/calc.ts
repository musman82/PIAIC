import inquirer from "inquirer";

console.log("Hello to Calculator in TypeScript by Muhammad Usman.");


const inqValidator = async (input:number) => {
      if (isNaN(input)) {
         return 'Incorrect asnwer';
      }
      return true;
   };

async function calculator(){
    var result = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: "Please enter a number 1: ",
            default: 0,
            validate:inqValidator
        },
        {
            type: "list",
            name: "operation",
            message: "Please select an Operation: ",
            choices: ["+","-","*","/","sqrt","pow"],
        }
    ]);

    if(result.operation != "sqrt"){
        var result1 = await inquirer.prompt({
            type: "number",
            name: "num2",
            message: "Please enter a number: ",
            default: 1
        });
        var calculation:number = 0;

        switch(result.operation) {
            case "+":{
                calculation = result.num1 + result1.num2;
                break;
            }   
            case "-":{
                calculation = result.num1 - result1.num2;
                break;
            }
            case "*":{
                calculation = result.num1 * result1.num2;
                break;
            }
            case "/":{
                calculation = result.num1 / result1.num2;
                break;
            }
            case "pow":{
                calculation = Math.pow (result.num1,  result1.num2);
                break;
            }
            default:{
                break;
            }
        }
        console.log(`${result.num1} ${result.operation} ${result1.num2} = `, calculation);
    }else{
        console.log(`${result.num1} ${result.operation} = `, Math.sqrt(result.num1));
    }
    console.log("Thanks for using TypeScript Calculator.")
}

calculator();
