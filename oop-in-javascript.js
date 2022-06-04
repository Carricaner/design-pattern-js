

// function constructor
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.greet = () => {
//     console.log("Hello, I'm " + this.name + ",and my age is " + this.age);
// };

// let john = new Person("John", 16);
// john.greet();


class Person {
    // private field -> begins with "#"
    #name;
    #age;

    // static property
    static PI = 3.14;

    constructor({ name, age = 18 } = {}) {
        this.#name = name;
        this.#age = age;
    }

    greet() {
        console.log("Hello, I'm " + this.#name + ",and my age is " + this.#age);
    }

    static walk() {
        console.log("Walking...")
    }
    

    // It is discouraged to use getters & setters in JS for it may cause uninspected errors!
};

let mary = new Person("Mary", 30);

console.log(mary.name); // undefined
console.log(mary.age); // undefined
mary.greet(); // 
console.log(Person.PI);
Person.walk();

