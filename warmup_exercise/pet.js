class Pet {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    toString() {
        return `Name: ${this.name}, Species: ${this.species}`;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get species() {
        return this._species;
    }

    set species(value) {
        this._species = value;
    }
}

class Dog extends Pet {
    constructor(name, breed) {
        super(name, 'Dog');
        this.breed = breed;
    }

    toString() {
        return `${super.toString()}, Breed: ${this.breed}`;
    }

    get breed() {
        return this._breed;
    }

    set breed(value) {
        this._breed = value;
    }
}

class Cat extends Pet {
    constructor(name, age) {
        super(name, 'Cat');
        this.age = age;
    }

    toString() {
        return `${super.toString()}, Age: ${this.age}`;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }
}

class Fish extends Pet {
    constructor(name, color) {
        super(name, 'Fish');
        this.color = color;
    }

    toString() {
        return `${super.toString()}, Color: ${this.color}`;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }
}

export { Pet, Dog, Cat, Fish };
