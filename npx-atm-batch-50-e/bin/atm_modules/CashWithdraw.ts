#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

async function otherAmount(balance: number) {
  const answer = await inquirer.prompt([
    {
      name: "OtherAmount",
      type: "number",
      message: "Please Enter Your Amount",
    },
]);
if (balance > Number(answer.OtherAmount)) {
      balance -= answer.OtherAmount;
    console.log(chalk.red(`Your Transaction is Successfull! Your new balance is ${balance}`));

  } else {
    console.log(chalk.red("You have Insufficient Balance"));

  }
  return balance;
}

async function cashWithdraw(balance: number) {
  const answer = await inquirer.prompt([
    {
      name: "amount",
      type: "list",
      choices: ["500", "1000", "2000", "5000", "Other Amount"],
      message: "Please Select your Amount",
    },
  ]);

    switch (answer.amount) {
      case "500":
        if (balance > Number(answer.amount)) {
          balance -= 500;
          console.log(chalk.yellow(`Your new balance is ${balance}`));
          break;
        } else {
          console.log(chalk.red("You have Insufficient Balance"));
          break;
          
        }
      case "1000":
        if (balance > Number(answer.amount)) {
            balance -= 1000;
            console.log(chalk.yellow(`Your new balance is ${balance}`));
            break;
          } else {
            console.log(chalk.red("You have Insufficient Balance"));
          break;

          }
      case "2000":
        if (balance > Number(answer.amount)) {
            balance -= 2000;
            console.log(chalk.yellow(`Your new balance is ${balance}`));
            break;
          } else {
            console.log(chalk.red("You have Insufficient Balance"));
          break;

          }
      case "5000":
        if (balance > Number(answer.amount)) {
            balance -= 5000;
            console.log(`Your new balance is ${balance}`);

            break;
          } else {
            console.log(chalk.red("You have Insufficient Balance"));
          break;

          }
      case "Other Amount":
        balance = await otherAmount(balance);
        // console.log(`Your New Balance is: ${balance}`);
        break;
    }

    return balance;
  } 

export default cashWithdraw;