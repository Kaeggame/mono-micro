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

class VehicleFactory {
    static createVehicle(vehicleType) {
        switch (vehicleType) {
            case 'car':
                return new Car();
            case 'truck':
                return new Truck();
            default:
                throw new Error('Type de véhicule non reconnu');
        }
    }
}

const vehicle1 = VehicleFactory.createVehicle('car');
const vehicle2 = VehicleFactory.createVehicle('truck');

vehicle1.drive(); 
vehicle2.drive();
