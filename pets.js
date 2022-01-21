class Pet {
    constructor(name,gender) {
        this.name = name
        this.gender = gender
    }
    energy = 5
    happiness = 5
    sateity = 5
};

class Dog extends Pet {
    type = "dog"
    happinessUnit = "wags"
    food = "meat"
    playMessage = `You and ${this.name} go out into the back garden to throw a stick around.`
    feedMessage = `No matter how much food you give ${this.name} they never seem to be satisfied, but at least they're always excited at dinnertime.`
    sleepMessage = `Little doggy snores echo from ${this.name}'s bed, signalling that their energy has finally run out.`
    happinessFail = `${this.name} is sad. Game over.`
    sateityFail = `${this.name} is hungry. Game over.`
    energyFail = `${this.name} is tired. Game over.`
};

class Cat extends Pet {
    type = "cat"
    happinessUnit = "purrs"
    food = "meat"
    playMessage = `You dangle a little toy on a string for ${this.name}, who plays with it briefly.`
    feedMessage = `${this.name} sniffs the offering of food dismissively at first, until they realise it's the only food you're offering them today.`
    sleepMessage = `${this.name} doesn't so much 'go to sleep' as take a break from napping to engage in actual sleep.`
    happinessFail = `${this.name} is sad. Game over.`
    sateityFail = `${this.name} is hungry. Game over.`
    energyFail = `${this.name} is tired. Game over.`
};

class Rat extends Pet {
    type = "rat"
    happinessUnit = "boggles"
    food = "rat snacks"
    playMessage = `You tickle ${this.name}, who bruxes with delight and squirms around.`
    feedMessage = `Your rat ${this.name} eats a series of little crackers and bits of fruit, grabbing hold of each one in a distinctly adorable way.`
    sleepMessage = `Safe in their hammock, ${this.name} rests for a time, their tail wiggling along with their dreams.`
    happinessFail = `${this.name} is sad. Game over.`
    sateityFail = `${this.name} is hungry. Game over.`
    energyFail = `${this.name} is tired. Game over.`
};

class Bird extends Pet {
    type = "bird"
    happinessUnit = "songs"
    food = "fruit"
    feedMessage = `You and ${this.name} play by doing peek-a-boo around their cage.`
    feedMessage = `Today's meal seems to please ${this.name}, who doesn't tip the container of sunflower seeds out instantly for once.`
    sleepMessage = `Your bird ${this.name} is finally asleep, and the house is uncannily quiet.`
    happinessFail = `${this.name} is sad. Game over.`
    sateityFail = `${this.name} is hungry. Game over.`
    energyFail = `${this.name} is tired. Game over.`
}

class SentientRobotSwarm extends Pet {
    type = "graygoo"
    happinessUnit = "human empathy"
    food = "nanite kibble"
    playMessage = `You play with ${this.name} by mimicking facial expressions at it - only stopping once it gets uncannily good at copying you.`
    feedMessage = `You feed ${this.name}, which largely involves you dropping little bits of salvage metal into the middle of it, making its' form expand.`
    sleepMessage = `${this.name} doesn't so much sleep as just quietly spin around in a corner in their enclosure, quietly mining Ethereum.`
    happinessFail = `${this.name} is sad. Game over.`
    sateityFail = `${this.name} is hungry. Game over.`
    energyFail = `${this.name} is tired. Game over.`
};

module.exports = {
    Pet,
    Dog,
    Cat,
    Rat,
    Bird,
    SentientRobotSwarm
}