#! /usr/bin/env node
import inquirer from "inquirer";
async function transfer(balance) {
    const answer = await inquirer.prompt([
        {
            name: "accountNumber",
            type: "number",
            message: "Enter Account Number"
        },
        {
            name: "amount",
            type: "number",
            message: "Enter Amount"
        }
    ]);
    balance -= answer.amount;
    return balance;
}
export default transfer;
