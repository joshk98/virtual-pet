const MAX_FITNESS = 10;
const MIN_HUNGER = 0;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
}

Pet.prototype.growUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    } else { 
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    }
}

Pet.prototype.walk = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    } if ((this.fitness + 4) <= MAX_FITNESS) {
        this.fitness += 4;
    } else {
        this.fitness = MAX_FITNESS;
    }
}

Pet.prototype.feed = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');   
    } if ((this.hunger - 3) >= MIN_HUNGER) {
        this.hunger -= 3;
    } else {
        this.hunger = MIN_HUNGER;
    }
}

Pet.prototype.checkUp = function() {
    if (!this.isAlive) {
        return 'Your pet is no longer alive :(';    
    } if (this.fitness <= 3 && this.hunger >= 5) {
        return 'I am hungry AND I need a walk';
    } if (this.fitness <= 3) {
        return 'I need a walk';
    } if (this.hunger >= 5) {
        return 'I am hungry';
    } else {
        return 'I feel great!';
    }
}

module.exports = Pet;