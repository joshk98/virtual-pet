const Pet = require('../src/pet');

describe('constructor', () => {
    test('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    test('sets the name property', () => {
        const pet = new Pet('Fido');

        expect(pet.name).toEqual('Fido');
    });

    test('has an initial age of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.age).toEqual(0);
    });

    test('has an initial hunger of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.hunger).toEqual(0);
    });

    test('has an initial fitness of 10', () => {
        const pet = new Pet('Fido');

        expect(pet.fitness).toEqual(10);
    });

    test('has an array for children that is initially empty', () => {
        const pet = new Pet('Fido');

        expect(pet.children).toEqual([]);
    });
});

describe('growUp', () => {
    test('increases age by 1', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.age).toEqual(1);
    });

    test('increases hunger by 5', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.hunger).toEqual(5);
    });

    test('decreases fitness by 3', () => {
        const pet = new Pet('Fido');

        pet.growUp();

        expect(pet.fitness).toEqual(7);
    });

    test('if the pet is not alive, the growUp function should throw an exception \'Your pet is no longer alive :(\'', () => {
        const pet = new Pet('Fido');

        pet.age = 30;

        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
    });
});

describe('walk', () => {
    test('increases fitness by 4', () => {
        const pet = new Pet('Fido');

        pet.fitness = 4;
        pet.walk();

        expect(pet.fitness).toEqual(8);
    });
    
    test('increases fitness to a maximum of 10', () => {
        const pet = new Pet('Fido');

        pet.fitness = 8;
        pet.walk();

        expect(pet.fitness).toEqual(10);
    });

    test('if the pet is not alive, the walk function should throw an exception \'Your pet is no longer alive :(\'', () => {
        const pet = new Pet('Fido');

        pet.fitness = 0;

        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });
});

describe('feed', () => {
    test('decreses hunger by 3', () => {
        const pet = new Pet('Fido');

        pet.hunger = 5;
        pet.feed();

        expect(pet.hunger).toEqual(2);
    });
    
    test('decreases hunger to a minimum of 0', () => {
        const pet = new Pet('Fido');

        pet.hunger = 2;
        pet.feed();

        expect(pet.hunger).toEqual(0);
    });

    test('if the pet is not alive, the feed function should throw an exception \'Your pet is no longer alive :(\'', () => {
        const pet = new Pet('Fido');

        pet.hunger = 10;

        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
});

describe('checkUp', () => {
    test('if the pet\'s fitness is 3 or less, it should return \'I need a walk\'', () => {
        const pet = new Pet('Fido');

        pet.fitness = 3;

        expect(pet.checkUp()).toEqual('I need a walk');
    });

    test('if the pet\'s hunger is 5 or more, it should return \'I am hungry\'', () => {
        const pet = new Pet('Fido');

        pet.hunger = 5;

        expect(pet.checkUp()).toEqual('I am hungry');
    });

    test('if both of the above are true, it should return \'I am hungry AND I need a walk\'', () => {
        const pet = new Pet('Fido');

        pet.fitness = 3;
        pet.hunger = 5;

        expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
    });

    test('if neither of the above are true, it should return \'I feel great!\'', () => {
        const pet = new Pet('Fido');

        pet.fitness = 4;
        pet.hunger = 3;

        expect(pet.checkUp()).toEqual('I feel great!');
    });

    test('if the pet is not alive, the checkUp function should return \'Your pet is no longer alive :(\'', () => {
        const pet = new Pet('Fido');

        pet.age = 30;

        expect(pet.checkUp()).toEqual('Your pet is no longer alive :(');
    });
});

describe('isAlive', () => {
    test('if the pet\'s fitness is 0 or less, it should return false', () => {
        const pet = new Pet('Fido');

        pet.fitness = 0;

        expect(pet.isAlive).toEqual(false);
    });

    test('if the pet\'s hunger is 10 or more, it should return false', () => {
        const pet = new Pet('Fido');

        pet.hunger = 10;

        expect(pet.isAlive).toEqual(false);
    });

    test('if the pet\'s age is 30 or more, it should return false', () => {
        const pet = new Pet('Fido');

        pet.age = 30;

        expect(pet.isAlive).toEqual(false);
    });

    test('if none of the above statements are false, it should return true', () => {
        const pet = new Pet('Fido');

        pet.fitness = 1;
        pet.hunger = 9;
        pet.age = 29;

        expect(pet.isAlive).toEqual(true);
    });
});

describe('adoptChild', () => {
    test('call the method on the parent pet which allows you to pass child as an argument', () => {
        const pet = new Pet('Fido');
        const child = new Pet('Josh');
        
        pet.adoptChild(child);

        expect(pet.children).toEqual([ { name: 'Josh', age: 0, hunger: 0, fitness: 10, children: [] } ]);
    });

    test('the first element of the parent\'s children array is the first child instance passed, and so on', () => {
        const pet = new Pet('Fido');
        const child = new Pet('Josh');
        const child2 = new Pet('Shrek');
        
        pet.adoptChild(child);
        pet.adoptChild(child2);

        expect(pet.children[0]).toEqual({ name: 'Josh', age: 0, hunger: 0, fitness: 10, children: [] });
    });

    test('call methods on children array from within parent object', () => {
        const pet = new Pet('Fido');
        const child = new Pet('Josh');
        
        pet.adoptChild(child);
        pet.children[0].growUp();
        pet.children[0].feed();

        expect(pet.children[0].hunger).toEqual(2);
    });

    test('if the pet is not alive, the adoptChild function should throw an exception \'Your pet is no longer alive :(\'', () => {
        const pet = new Pet('Fido');
        const child = new Pet('Josh');
        
        pet.hunger = 10;

        expect(() => pet.adoptChild(child)).toThrow('Your pet is no longer alive :(');
    });

    test('if the child being adopted is not alive, the adoptChild function should throw an exception \'The child you want to adopt is no longer alive :(\'', () => {
        const pet = new Pet('Fido');
        const child = new Pet('Josh');
        
        child.hunger = 10;

        expect(() => pet.adoptChild(child)).toThrow('The child you want to adopt is no longer alive :(');
    });
});

describe('haveBaby', () => {
    test('call the method on the parent pet which allows you to pass the child\'s name in as an argument', () => {
        const pet = new Pet('Fido');
        
        pet.haveBaby('Josh');

        expect(pet.children).toEqual([ { name: 'Josh', age: 0, hunger: 0, fitness: 10, children: [] } ]);
    });

    test('the first element of the parent\'s children array is the first child instance passed, and so on', () => {
        const pet = new Pet('Fido');
        const child = new Pet('Josh');
        
        pet.adoptChild(child);
        pet.haveBaby('Shrek');

        expect(pet.children[1]).toEqual({ name: 'Shrek', age: 0, hunger: 0, fitness: 10, children: [] });
    });

    test('if the pet is not alive, the haveBaby function should throw an exception \'Your pet is no longer alive :(\'', () => {
        const pet = new Pet('Fido');

        pet.hunger = 10;

        expect(() => pet.haveBaby('Josh')).toThrow('Your pet is no longer alive :(');
    });
});