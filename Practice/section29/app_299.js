class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        // console.log('in cat constructor');
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'MEOWW!!';
    }
}

class Dog extends Pet {
    bark() {
        return 'WOOFF!!';
    }
    eat() {
        return `${this.name} scarfs his food!`; // if it doesn't find eat in the Dog prototype, it will look above in the ineritance tree (in Pet) to check there for the 'eat' method
    }
}