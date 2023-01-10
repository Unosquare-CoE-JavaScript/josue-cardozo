class Person {
  constructor(age = 0) {
    this.age = age
  }

  drink() {
    return 'drinking'
  }
  drive() {
    return 'driving'
  }
  drinkAndDrive() {
    return 'driving while drunk'
  }
}

class ResponsiblePerson {
  constructor(person) {
    this.person = person
  }

  get age() {
    return this.person.age
  }
  set age(age) {
    return (this.person.age = age)
  }

  drink() {
    return this.person.age > 18 ? this.person.drink() : 'too young';
  }
  drive() {
    return this.person.age > 16 ? this.person.drive() : 'too young';
  }
  drinkAndDrive() {
    return 'dead'
  }
}

let rp = new ResponsiblePerson(new Person(15))
console.log(rp.drinkAndDrive())
