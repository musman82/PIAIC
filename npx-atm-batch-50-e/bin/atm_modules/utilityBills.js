#! /usr/bin/env node
import inquirer from "inquirer";
const Electric = Math.ceil(Math.random() * 10000 + 1);
const Gas = Math.ceil(Math.random() * 10000 + 1);
const Phone = Math.ceil(Math.random() * 10000 + 1);
async function utility(balance) {
    const input = await inquirer.prompt([
        {
            name: "billType",
            type: "list",
            choices: ["Electricity", "Gas", "Phone"],
            message: "Please select your bill type"
        }
    ]);
    if (input.billType == "Electricity") {
        console.log(`Your bill amount is: ${Electric}`);
        balance -= Electric;
    }
    else if (input.billType == "Gas") {
        console.log(`Your bill amount is: ${Gas}`);
        balance -= Gas;
    }
    else if (input.billType == "Phone") {
        console.log(`Your bill amount is: ${Phone}`);
        balance -= Phone;
    }
    return balance;
}
export default utility;
