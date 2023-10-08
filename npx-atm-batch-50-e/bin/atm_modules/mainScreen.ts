import inquirer from "inquirer";
import cashDeposit from "./cashDeposit.js";
import cashWithdraw from "./CashWithdraw.js";
import transfer from "./transfer.js";
import utility from "./utilityBills.js";
import chalk from "chalk";


async function anotherTransaction(){

    const input = await inquirer.prompt([
        {
            name: "otherTrans",
            type: "list",
            choices: ["Yes", "No"],
            message: "Do You Want Another Transaction?"
        }
    ]);
    return input.otherTrans;
}

async function mainScreen(balance: number){

    do{

        const options = await inquirer.prompt([
            {
                name: "menu",
                type: "list",
                choices: ['Balance Inquiry', 'Cash Withdraw', 'Cash Deposit', 'Transfer', 'Utility Bills', 'Exit'],
                message: "Please Select your Transaction Type"
            }
        ]);
    
        switch (options.menu){
            case "Balance Inquiry":
                console.log(chalk.yellow(`Your Current Balance is: ${balance}`));
                break;
            case "Cash Withdraw":
                balance = await cashWithdraw(balance);
                // console.log(chalk.green(`Your Transaction is Successfull! New Balance is ${balance}`));
                break;
            case "Cash Deposit":
                balance = await cashDeposit(balance);
                console.log(chalk.green(`Your Deposit is Successfull! New Balance is ${balance}`));
                break;
            case "Transfer":
                balance = await transfer(balance);
                console.log(chalk.green(`Your Transfer is Successfull! New Balance is ${balance}`));

                break;
            case "Utility Bills":
                balance = await utility(balance);
                console.log(chalk.green(`Your Transaction is Successfull! New Balance is ${balance}`));
            case "Exit":
                anothertrans = "No";
                break;
        }

        if(options.menu != "Exit"){

            var anothertrans = await anotherTransaction();
        }
        if(anothertrans == "No"){
            console.log(chalk.blue("Thank you for using our services!"))
        }
    } while (anothertrans != "No")

}

export default mainScreen;