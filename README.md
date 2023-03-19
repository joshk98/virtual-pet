<h1>JavaScript Pet</h1>

Do you love pets but can't have one for various reasons? Fear not, with the JavaScript Pet project, you can have your own virtual pet without any of the drawbacks of real pets. JavaScript Pets are made of code and can do literally anything, and they don't even leave a mess!


<h2>Features</h2>

This code simulates the behavior of a virtual pet. It defines a Pet class that can be instantiated with a name and has properties for age, hunger, fitness, and an array of children.

The Pet class also defines several methods to interact with the pet, such as growUp, walk, feed, checkUp, adoptChild, and haveBaby.


<h2>Getting Started</h2>

Clone or download this repository and run npm install to install the necessary dependencies.

To use the Pet class, require it in your own code:

const Pet = require('./src/pet');

To create a new pet, simply instantiate the Pet class:

const pet = new Pet('Fido');


<h2>Properties</h2>

    name: the name of the pet
    age: the age of the pet (initially 0)
    hunger: the hunger level of the pet (initially 0)
    fitness: the fitness level of the pet (initially 10)
    children: an array of child pets (initially empty)


<h2>Methods</h2>

<h3>growUp()</h3>

Increases the pet's age by 1, hunger by 5, and decreases fitness by 3. Throws an error if the pet is no longer alive (age >= 30 or hunger >= 10 or fitness <= 0).

Example:

pet.growUp();


<h3>walk()</h3>

Increases the pet's fitness by 4 (up to a maximum of 10). Throws an error if the pet is no longer alive.

Example:

pet.walk();


<h3>feed()</h3>

Decreases the pet's hunger by 3 (down to a minimum of 0). Throws an error if the pet is no longer alive.

Example:

pet.feed();


<h3>checkUp()</h3>

Returns a string indicating the pet's current state:

    "I am hungry AND I need a walk" if the pet's hunger is 5 or more and fitness is 3 or less
    "I need a walk" if the pet's fitness is 3 or less
    "I am hungry" if the pet's hunger is 5 or more
    "I feel great!" if none of the above

Example:

pet.checkUp(); // "I feel great!"


<h3>adoptChild(child)</h3>

Adds a child pet to the children array. Throws an error if the pet or the child is no longer alive.

Example:

const child = new Pet('Puppy');
pet.adoptChild(child);


<h3>haveBaby(baby)</h3>

Adds a new child pet to the children array. Throws an error if the pet is no longer alive.

Example:

pet.haveBaby('Kitten');


<h2>Running the Tests</h2>

To run the tests, use the npm test command. The tests are defined in the __tests__ directory.
