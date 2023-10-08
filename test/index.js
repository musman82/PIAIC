import inquirer from "inquirer";
async function getGrades() {
    var result = await inquirer.prompt({
        type: "number",
        name: "marks",
        message: "Please Enter your Marks :",
    });
    if (result.marks >= 90) {
        console.log("Marks: ", result.marks, " ---- Grade: A+ ");
    }
    else if (result.marks >= 80 && result.marks < 90) {
        console.log("Marks: ", result.marks, " ---- Grade: A ");
    }
    else if (result.marks >= 70 && result.marks < 80) {
        console.log("Marks: ", result.marks, " ---- Grade: B ");
    }
    else if (result.marks >= 60 && result.marks < 70) {
        console.log("Marks: ", result.marks, " ---- Grade: C ");
    }
    else if (result.marks >= 50 && result.marks < 60) {
        console.log("Marks: ", result.marks, " ---- Grade: D ");
    }
    else if (result.marks < 50) {
        console.log("Marks: ", result.marks, " ---- Grade: Fail");
    }
}
getGrades();
