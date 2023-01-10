class Car {
  drive() {
    console.log(`car is being driven`);
  }
}

class CarProxy {
  constructor(driver) {
    this.driver = driver;
    this._car = new Car();
  }

  drive() {
    if (this.driver.age >= 16)
      this._car.drive();
    else {
      console.log(`Driver too young`);
    }
  }
}

class Driver {
  constructor(age) {
    this.age = age;
  }
}

let car = new Car();
car.drive();

let car2 = new CarProxy(new Driver(80));
car2.drive();
