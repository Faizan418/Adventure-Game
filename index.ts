#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.bold.magentaBright("\n>>>>>>>> WELCOME TO ADVENTURE GAME <<<<<<<<\n"));


class Player{
    name: string;
    fuel: number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel -25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    }
}

class Opponent{
    name: string;
    fuel: number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel -25
        this.fuel = fuel
    }
}

let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: (chalk.bold.yellowBright("Please enter your name:\n\t"))
    }
])

let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: (chalk.bold.yellowBright("Please select your opponent:\n\t")),
        choices: ["Skeleton", "Alien", "Zombie"]
            
    }
])

let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)

do{
    if(opponent.select == "Skeleton"){
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: (chalk.bold.bgBlue("What would you like to do?")),
                choices: ["Attack", "Drink Portion", "Run For Your Life"]
            }
        ]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(chalk.bold.gray(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.bold.gray(`${o1.name} Fuel is ${o1.fuel}`));
                if(p1.fuel <= 0){
                    console.log(chalk.bold.redBright(chalk.bold.redBright("You Loose,--- \n\t---Better Luck Next Time...\n\t")));   
                    process.exit()
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(chalk.bold.gray(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.gray(`${o1.name} fuel is ${o1.fuel}`));
                if(o1.fuel <= 0){
                    console.log(chalk.bold.magentaBright("\n\t>>>>>> You Win <<<<<<\n\t"));   
                    process.exit()
            }
        }
    }
        if(ask.opt == "Drink Portion"){
            p1.fuelIncrease()
            console.log(chalk.bold.green(`\n\tYour Drink Health Portion YOur Fuel is ${p1.fuel}\n\t`));
        }
        if(ask.opt == "Run For Your Life"){
            console.log(chalk.bold.redBright("\nYou Loose,--- \n\t---Better Luck Next Time...\n"));   
            process.exit()
        }
    }
    if(opponent.select == "Alien"){
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: (chalk.bold.bgBlue("What would you like to do?")),
                choices: ["Attack", "Drink Portion", "Run For Your Life"]
            }
        ]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(chalk.bold.gray(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.bold.gray(`${o1.name} Fuel is ${o1.fuel}`));
                if(p1.fuel <= 0){
                    console.log(chalk.bold.redBright(chalk.bold.redBright("You Loose,--- \n\t---Better Luck Next Time...\n\t")));   
                    process.exit()
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(chalk.bold.gray(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.gray(`${o1.name} fuel is ${o1.fuel}`));
                if(o1.fuel <= 0){
                    console.log(chalk.bold.magentaBright("\n\t>>>>>> You Win <<<<<<\n\t"));   
                    process.exit()
            }
        }
    }
        if(ask.opt == "Drink Portion"){
            p1.fuelIncrease()
            console.log(chalk.bold.green(`\n\tYour Drink Health Portion YOur Fuel is ${p1.fuel}\n\t`));
        }
        if(ask.opt == "Run For Your Life"){
            console.log(chalk.bold.redBright("\nYou Loose,--- \n\t---Better Luck Next Time...\n"));   
            process.exit()
        }
    }
    if(opponent.select == "Zombie"){
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: (chalk.bold.bgBlue("What would you like to do?")),
                choices: ["Attack", "Drink Portion", "Run For Your Life"]
            }
        ]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(chalk.bold.gray(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.bold.gray(`${o1.name} Fuel is ${o1.fuel}`));
                if(p1.fuel <= 0){
                    console.log(chalk.bold.redBright(chalk.bold.redBright("You Loose,--- \n\t---Better Luck Next Time...\n\t")));   
                    process.exit()
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(chalk.bold.gray(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.gray(`${o1.name} fuel is ${o1.fuel}`));
                if(o1.fuel <= 0){
                    console.log(chalk.bold.magentaBright("\n\t>>>>>> You Win <<<<<<\n\t"));   
                    process.exit()
            }
        }
    }
        if(ask.opt == "Drink Portion"){
            p1.fuelIncrease()
            console.log(chalk.bold.green(`\n\tYour Drink Health Portion YOur Fuel is ${p1.fuel}\n\t`));
        }
        if(ask.opt == "Run For Your Life"){
            console.log(chalk.bold.redBright("\nYou Loose,--- \n\t---Better Luck Next Time...\n"));   
            process.exit()
        }
    }
}
while(true);