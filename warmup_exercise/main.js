import { Pet, Dog, Cat, Fish } from './pet.js';
// const { Pet, Dog, Cat, Fish } = require('./pet.js');

const pets = [
    new Dog('Tom', 'Golden Retriever'),
    new Cat('Kitty', '3'),
    new Fish('Goldy', 'gold')
];

const petSpeciesArray = pets.map(pet => pet.species);
console.log(petSpeciesArray);

pets.forEach(pet => {
    console.log(pet.toString());
});

console.log(pets[0].name);
pets[0].name = 'Tommy';
console.log(pets[0].name);
