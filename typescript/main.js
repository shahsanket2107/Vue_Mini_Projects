"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pet_1 = require("./pet");
var pets = [
    new pet_1.Dog('Tom', 'Golden Retriever'),
    new pet_1.Cat('Kitty', '3'),
    new pet_1.Fish('Goldy', 'gold')
];
var petSpeciesArray = pets.map(function (pet) { return pet.species; });
console.log(petSpeciesArray);
pets.forEach(function (pet) {
    console.log(pet.toString());
});
console.log(pets[0].name);
pets[0].name = 'Tommy';
console.log(pets[0].name);
