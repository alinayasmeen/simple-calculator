#! /usr/bin/env   node
//SHABANG
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNum" },
    { message: "Enter your second number", type: "number", name: "secondNum" },
    {
        message: "Select any one of the operator",
        type: "list",
        name: "operator",
        choices: ["Add", "Subtract", "Multiply", "Divide"],
    },
]);
if (answer.operator === "Add") {
    console.log("your value is " + answer.firstNum + answer.secondNum);
}
else if (answer.operator === "Subtract") {
    console.log("your value is " + (answer.firstNum - answer.secondNum));
}
else if (answer.operator === "Multiply") {
    console.log("your value is " + (answer.firstNum * answer.secondNum));
}
else if (answer.operator === "Divide") {
    console.log("your value is " + (answer.firstNum / answer.secondNum));
}
else {
    console.log("Kindly select a suitable oprator");
}
