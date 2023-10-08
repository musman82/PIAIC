#! /usr/bin/env node
import users from "./users.js";
import inquirer from "inquirer";
import mainScreen from "./mainScreen.js";

async function login() {
  const answer = await inquirer.prompt([
    {
      name: "accountNumber",
      type: "number",
      message: "PLease Enter your Account Number :",
    },
    {
      name: "pin",
      type: "password",
      message: "Enter your Pin Code :",
    },
  ]);

  let user = users.find(
    (x) => x.accountNumber == answer.accountNumber && x.pinCode == answer.pin
  );

  if (typeof user != "undefined") {
    console.log(`Welcome ${user.name}`);
    mainScreen(user.balance);
  } else {
    console.log("Invalid Account No. or Pin Code.");
  }
}

export default login;