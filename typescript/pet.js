"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fish = exports.Cat = exports.Dog = exports.Pet = void 0;
var Pet = /** @class */ (function () {
    function Pet(name, species) {
        this._name = name;
        this._species = species;
    }
    Pet.prototype.toString = function () {
        return "Name: ".concat(this.name, ", Species: ").concat(this.species);
    };
    Object.defineProperty(Pet.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pet.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            this._species = value;
        },
        enumerable: false,
        configurable: true
    });
    return Pet;
}());
exports.Pet = Pet;
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, breed) {
        var _this = _super.call(this, name, 'Dog') || this;
        _this._breed = breed;
        return _this;
    }
    Dog.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), ", Breed: ").concat(this.breed);
    };
    Object.defineProperty(Dog.prototype, "breed", {
        get: function () {
            return this._breed;
        },
        set: function (value) {
            this._breed = value;
        },
        enumerable: false,
        configurable: true
    });
    return Dog;
}(Pet));
exports.Dog = Dog;
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, age) {
        var _this = _super.call(this, name, 'Cat') || this;
        _this._age = age;
        return _this;
    }
    Cat.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), ", Age: ").concat(this.age);
    };
    Object.defineProperty(Cat.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return Cat;
}(Pet));
exports.Cat = Cat;
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, color) {
        var _this = _super.call(this, name, 'Fish') || this;
        _this._color = color;
        return _this;
    }
    Fish.prototype.toString = function () {
        return "".concat(_super.prototype.toString.call(this), ", Color: ").concat(this.color);
    };
    Object.defineProperty(Fish.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    return Fish;
}(Pet));
exports.Fish = Fish;
