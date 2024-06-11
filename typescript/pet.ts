class Pet {
    private _name: string;
    private _species: string;

    constructor(name: string, species: string) {
        this._name = name;
        this._species = species;
    }

    toString(): string {
        return `Name: ${this.name}, Species: ${this.species}`;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get species(): string {
        return this._species;
    }

    set species(value: string) {
        this._species = value;
    }
}

class Dog extends Pet {
    private _breed: string;

    constructor(name: string, breed: string) {
        super(name, 'Dog');
        this._breed = breed;
    }

    toString(): string {
        return `${super.toString()}, Breed: ${this.breed}`;
    }

    get breed(): string {
        return this._breed;
    }

    set breed(value: string) {
        this._breed = value;
    }
}

class Cat extends Pet {
    private _age: string;

    constructor(name: string, age: string) {
        super(name, 'Cat');
        this._age = age;
    }

    toString(): string {
        return `${super.toString()}, Age: ${this.age}`;
    }

    get age(): string {
        return this._age;
    }

    set age(value: string) {
        this._age = value;
    }
}

class Fish extends Pet {
    private _color: string;

    constructor(name: string, color: string) {
        super(name, 'Fish');
        this._color = color;
    }

    toString(): string {
        return `${super.toString()}, Color: ${this.color}`;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }
}

export { Pet, Dog, Cat, Fish };