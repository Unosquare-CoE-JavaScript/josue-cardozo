const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

// De esta forma se crea una copia y no una referencia
const arr4 = [...arr2];

arr4.push(6);

console.log(...arr1);

const userOne = {
    name: 'David',
    age: 22,
    city: 'Salt Lake City',
    country: 'USA'
};

const userTwo = {...userOne, name: 'Jhon', gender: 'male'};

console.log('userOne:', userOne);
console.log('userTwo:', userTwo);
