class Car {
    constructor() {
        this.type = 'Car';
    }

    drive() {
        console.log('Driving a car!');
    }
}

class Truck {
    constructor() {
        this.type = 'Truck';
    }

    drive() {
        console.log('Driving a truck!');
    }
}

// On crée manuellement les objets
const vehicle1 = new Car();
const vehicle2 = new Truck();

vehicle1.drive(); // Driving a car!
vehicle2.drive(); // Driving a truck!
