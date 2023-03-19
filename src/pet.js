const MIN_AGE = 0; // minimum age value
const MIN_HUNGER = 0; // minimum hunger value
const MAX_FITNESS = 10; // maximum fitness value

function Pet(name) {
    this.name = name;
    this.age = MIN_AGE;
    this.hunger = MIN_HUNGER;
    this.fitness = MAX_FITNESS;
    this.children = [];
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
    const INCREMENT_WALK = 4; // amount summed to fitness value as a result of walk()
  
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    } if ((this.fitness + INCREMENT_WALK) <= MAX_FITNESS) {
        this.fitness += INCREMENT_WALK;
    } else {
        this.fitness = MAX_FITNESS;
    }
}

Pet.prototype.feed = function() {
    const INCREMENT_FEED = 3; // amount summed to hunger value as a result of feed()

    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');   
    } if ((this.hunger - INCREMENT_FEED) >= MIN_HUNGER) {
        this.hunger -= INCREMENT_FEED;
    } else {
        this.hunger = MIN_HUNGER;
    }
}

Pet.prototype.checkUp = function() {
    CHECKUP_HUNGER = 5; // desired level of hunger for checkUp function
    CHECKUP_FITNESS = 3; // desired level of fitness for checkUp function

    if (!this.isAlive) {
        return 'Your pet is no longer alive :(';    
    } if (this.fitness <= CHECKUP_FITNESS && this.hunger >= CHECKUP_HUNGER) {
        return 'I am hungry AND I need a walk';
    } if (this.fitness <= CHECKUP_FITNESS) {
        return 'I need a walk';
    } if (this.hunger >= CHECKUP_HUNGER) {
        return 'I am hungry';
    } else {
        return 'I feel great!';
    }
}

Pet.prototype.adoptChild = function(child) {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    } if (!child.isAlive) {
        throw new Error('The child you want to adopt is no longer alive :(');
    } else {
    this.children.push(child);
    }
}

Pet.prototype.haveBaby = function(baby) {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
    } else { 
    this.children.push(new Pet(baby));
    }
}

module.exports = Pet;