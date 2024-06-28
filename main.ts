#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const userAns : {
    sentence: string
} = await inquirer. prompt(
    [
        {
            name: "sentence",
            type: "input",
            message: chalk.magenta("Entr Your Sentence To Count The Word:")
        }
    ]
)
const Words = userAns.sentence.trim().split(" ")
console.log(Words);
console.log(chalk.yellow(`your sentence word count is ${Words.length}`));

