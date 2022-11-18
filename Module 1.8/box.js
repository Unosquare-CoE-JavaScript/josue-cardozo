const nextCharForNumberString = str => {
    const trimmed = str.trim();
    const number = parseInt(trimmed);
    const nextNumber = number + 1;
    return String.fromCharCode(nextNumber);
};
  
const result = nextCharForNumberString("  64 ");
  
console.log(result);

const Box = require("./box");

const first = xs => xs[0];

const halfTheFirstLargeNumber = xs => {
  const found = xs.filter(x => x >= 20);
  const answer = first(found) / 2;
  return `The answer is ${answer}`;
};

const res = halfTheFirstLargeNumber([1, 4, 50]);
console.log(res);
