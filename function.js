function greeting(name){
    return "Good Afternoon, " + name;
}

console.log(greeting("Sanket"));


// function greet(message,name){
//     return `${message}, ${name}`;
// }

const greet = (message, name) => `${message}, ${name}`;

console.log(greet("Hii there","Sanket"));

const person ={
    name: "Sanket",
    sayName: function(){
        return `My name is ${this.name}`;
    }
}

console.log(person.sayName());