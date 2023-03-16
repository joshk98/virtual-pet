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
});

describe('checkUp', () => (
    test('if the pet\'s fitness is 3 or less, it should return \'I need a walk', () => {

    });

    test('if the pet\'s hunger is 5 or more, it should return \'I am hungry', () => {

    });

    test('if both of the above are true, it should return \'I am hungry AND I need a walk', () => {

    });

    test('if neither of the above are true, it should return \'I feel great!', () => {

    });
));