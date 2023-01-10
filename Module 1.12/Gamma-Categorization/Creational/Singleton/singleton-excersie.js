class SingletonCheck {
  isSingleton(Generator) {
    let obj1 = new Generator();
    let obj2 = new Generator();

    return obj1 === obj2;
  }
}
