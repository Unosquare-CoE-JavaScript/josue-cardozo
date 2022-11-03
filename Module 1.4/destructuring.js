const user = {
    name: 'David',
    age: 22,
    city: 'Salt Lake City',
    country: 'USA'
};

const { name, city } = user;

console.log('name:', name);
console.log('city:', city);

const arr = [1,2,3,4];

const [foo, bar, jazz] = arr

console.log(foo, bar, jazz);
