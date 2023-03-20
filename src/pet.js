const MIN_AGE = 0;
const MIN_HUNGER = 0;
const MAX_FITNESS = 10;

function Pet(name) {
    this.name = name;
    this.age = MIN_AGE;
    this.hunger = MIN_HUNGER;
    this.fitness = MAX_FITNESS;
    this.children = [];
}

Pet.prototype = {
    get isAlive() {
        const ALIVE_AGE = 30;
        const ALIVE_HUNGER = 10;
        const ALIVE_FITNESS = 0;

        return this.age < ALIVE_AGE && this.hunger < ALIVE_HUNGER && this.fitness > ALIVE_FITNESS;
    }
}

Pet.prototype.growUp = function() {
    const GROWUP_AGE = 1;
    const GROWUP_HUNGER = 5;
    const GROWUP_FITNESS = 3;

    if (!this.isAlive) throw new Error('Your pet is no longer alive :(');
    this.age += GROWUP_AGE;
    this.hunger += GROWUP_HUNGER;
    this.fitness -= GROWUP_FITNESS;
}

Pet.prototype.walk = function() {
    const INCREMENT_WALK = 4;
  
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    if ((this.fitness + INCREMENT_WALK) <= MAX_FITNESS) {
        this.fitness += INCREMENT_WALK;
    } 
    else {
        this.fitness = MAX_FITNESS;
    }
}

Pet.prototype.feed = function() {
    const INCREMENT_FEED = 3;

    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');   
    }
    if ((this.hunger - INCREMENT_FEED) >= MIN_HUNGER) {
        this.hunger -= INCREMENT_FEED;
    } 
    else {
        this.hunger = MIN_HUNGER;
    }
}

Pet.prototype.checkUp = function() {
    if (!this.isAlive) return "Your pet is no longer alive :(";

    const CHECKUP_HUNGER = 5;
    const CHECKUP_FITNESS = 3
    const checkHunger = this.hunger >= CHECKUP_HUNGER;
    const checkFitness = this.fitness <= CHECKUP_FITNESS;
    const hungryString = "I am hungry";
    const walkString = "I need a walk";

    if (checkFitness && checkHunger) return `${hungryString} AND ${walkString}`;
    if (checkFitness) return walkString;
    if (checkHunger) return hungryString;
    return "I feel great!";

    /*     const CHECKUP_HUNGER = 5;
    const CHECKUP_FITNESS = 3;

    if (!this.isAlive) {
        return 'Your pet is no longer alive :(';    
    } 
    if (this.fitness <= CHECKUP_FITNESS && this.hunger >= CHECKUP_HUNGER) {
        return 'I am hungry AND I need a walk';
    } 
    if (this.fitness <= CHECKUP_FITNESS) {
        return 'I need a walk';
    } 
    if (this.hunger >= CHECKUP_HUNGER) {
        return 'I am hungry';
    } 
    else {
        return 'I feel great!';
    } */
}

Pet.prototype.adoptChild = function(child) {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    } 
    if (!child.isAlive) {
        throw new Error('The child you want to adopt is no longer alive :(');
    }
    this.children.push(child);
}

Pet.prototype.haveBaby = function(baby) {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    }
    this.children.push(new Pet(baby));
}

module.exports = Pet;