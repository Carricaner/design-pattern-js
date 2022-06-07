
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
    name;
    #age;

    // static property
    static PI = 3.14;

    constructor({ name, age = 18 } = {}) {
        this.name = name;
        this.#age = age;
    }

    greet() {
        console.log("Hello, I'm " + this.name + ",and my age is " + this.#age);
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.#age
    }


    // static method
    static walk() {
        console.log("Walking...")
    }
    

    // It is discouraged to use getters & setters in JS for it may cause uninspected errors!
};

class Doctor extends Person {
    #profession

    constructor({ name, age } = {}) {
        super(name, age);
        this.#profession = "Doctor"
    }

    diagnosis() {
        console.log("Doctor " + super.getName() + " is diagnosing...")
    }

    getProfession() {
        return this.#profession
    }
}

let mary = new Person({name: "Mary", age: 30});

console.log(mary.name); // undefined
console.log(mary.age); // undefined
console.log(mary.getName())
console.log(mary.getAge())
mary.greet(); 
console.log(Person.PI);
Person.walk();

let lawrance = new Doctor({name: "Lawrance"});
console.log(lawrance.getProfession());
console.log(lawrance.diagnosis());
