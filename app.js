let inquirer = require('inquirer');
let {Pet,Dog,Cat,Rat, Bird, SentientRobotSwarm} = require("./pets");

let choices
let userPet

let petDetails = [ 
    {
    type: "list",
    name: "petType",
    message: "What type of pet do you want?",
    choices: ["Dog","Cat","Rat","Bird","Robot Swarm"]
    },
    {
    type: "input",
    name: "petName",
    message: "What is your pet's name?"
    },
    {
    type: "list",
    name: "petGender",
    message: "What is your pet's gender?",
    choices: ["Male","Female","Non-binary"]    
    }
];

let actionQuestions = [
    {
        type: "rawlist",
        name: "action",
        message: `What do you want to do with your pet?`,
        choices: [
            "Feed",
            "Play",
            "Sleep",
            "Nothing",
            "End Game"
        ]
    }
]

const gameStart = async () => {
    let answers = await inquirer.prompt(petDetails)
    choices = answers
    switch (choices.petType) {
        case "Dog":
            userPet = new Dog((choices.petName),(choices.petGender));
            break;
        case "Cat":
            userPet = new Cat((choices.petName),(choices.petGender));
            break;
        case "Rat":
            userPet = new Rat((choices.petName),(choices.petGender));
            break;
        case "Bird":
            userPet = new Bird((choices.petName),(choices.petGender));
            break;
        case "Robot Swarm":
            userPet = new SentientRobotSwarm((choices.petName),(choices.petGender));    
    } 
    actionLoop();
};

actionLoop = async () => {
    if (userPet.happiness <= 0) {
        console.log(userPet.happinessFail)
        return
    } else if (userPet.sateity <= 0) {
        console.log(userPet.sateityFail)
        return
    } else if (userPet.energy <= 0) {
        console.log(userPet.energyFail)
        return
    } else {
    let answers = await inquirer.prompt(actionQuestions)
    choices = answers
    switch (choices.action) {
        case "Feed":
            console.log(userPet.feedMessage);
            userPet.energy = userPet.energy - 2;
            userPet.sateity = userPet.sateity + 2;
            userPet.happiness = userPet.happiness - 2;
            break
        case "Play":
            console.log(userPet.playMessage);
            userPet.energy = userPet.energy - 2;
            userPet.sateity = userPet.sateity - 2;
            userPet.happiness = userPet.happiness + 2;
            break
        case "Sleep":
            console.log(userPet.sleepMessage);
            userPet.energy = userPet.energy + 2;
            userPet.sateity = userPet.sateity - 2;
            userPet.happiness = userPet.happiness - 2;
            break
        case "Nothing":
            console.log("OK, you do nothing for a while.")
            break
        case "End Game":
            console.log("Game over!")
            return
    }
    actionLoop(); 
}
}

// choices = answers

gameStart();

// loopQuestion() is our way to return back to the start
//bottom bar for pet stats
//can use chalk for colours
//can use figlet for ascii art