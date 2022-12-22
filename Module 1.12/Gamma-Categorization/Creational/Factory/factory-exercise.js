class Person
{
  constructor(id, name)
  {
    this.id = id;
    this.name = name;
  }
}

class PersonFactory
{
  constructor() {
      this.id = 0
  }
  createPerson(name)
  {
    return new Person(this.id++, name);
  }
}

let p1 = new PersonFactory();
p1.createPerson('juan');
p1.createPerson('perex');
console.log(p1.createPerson('armando'))
