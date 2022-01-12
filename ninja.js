class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(`Ninja name: ${this.name}`)
    }

    showStats() {
        console.log(`Ninja name: ${this.name}, Ninja Stength: ${this.strength}, Ninja Speed: ${this.speed}, Ninja Health: ${this.health}.`)
    }

    drinkSake() {
        this.health += 10;
        console.log(`Ninja health has increased to: ${this.health}`)
    }

}

const ninja1 = new Ninja("Hyabusa", 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();


// EXTENDS TO NINJA CLASS
class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom) {
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }

    speakWisdom() {
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }

    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}.`)
    }

}


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();








