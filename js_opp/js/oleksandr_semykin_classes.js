class Car {
    constructor(model, mark, country, speed) {
        this.model = model;
        this.mark = mark;
        this.country = country;
        this.speed = speed;
    }
    increaseSpeed(value) {
        this.speed += value;
        return this.speed
    }
    decreaseSpeed(value) {
        this.speed -= value;
        return this.speed
    }
}

class Truck extends Car {
    constructor(model, mark, country, speed) {
        super(model, mark, country, speed);
    }
    takeWeight(weight) {
        return `Truck ${this.mark} ${this.model} take ${weight} kg.`;
}
}

class Bus extends Car {
    constructor (model, mark, country, speed) {
        super (model, mark, country, speed);
    }
    takePeople(people) {
        return `Bus ${this.mark} ${this.model} take ${people} people`;
}
}

class Transporter extends Car {
    constructor (model, mark, country, speed) {
        super (model, mark, country, speed);
    }
    takeCars(cars) {
        return `Transporter ${this.mark} ${this.model} take ${cars} cars`;
}
}

const truck = new Truck("CF440", "DAF", "Netherlands", 120);
console.log(truck.takeWeight(5000));
const bus = new Bus('9900', 'VOLVO', 'Sweden', 80);
console.log(bus.takePeople(40));
const transporter = new Transporter('Actros', 'Mercedes-Benz', 'Germany', 90);
console.log(transporter.takeCars(4));






// метод increaseSpeed который будет увеличивать скорость на значение переданное в метод 
// decreaseSpeed который будет уменьшать скорость на переданное значение

// создать 3 машины - truck( фура ) у которой будут все методы и свойства базового класса Car и еще метод takeWeight c переданным значением сколько весит груз
// Результатом метода должен быть консоль лог - truck {mark} {model} take {weight} kg

// вторая машина - автобус ( bus ) - у которой будут все методы и свойства базового класса Car и еще метод takePeople - 
// результатом метода должен быть консоль лог - bus {mark} {model} take {people} people

// Третья машина - transporter ( машина для транспортировки автомобилей ) у которой будут все методы и свойства базового класса Car и еще метод takeCars - 
// результатом метода должен быть консоль лог - transporter {mark} {model} take {cars} cars.
