class SingleValue {
	constructor(value) {
		this.value = value;
		this.composite = true;
	}
}

class ManyValues {
	constructor() {
		this.values = [];
	}
	push(value) {
		this.values.push(value);
	}
	sumTotal() {
		return this.values.reduce((previous, current) => previous + current, 0);
	}
}

function sum(vals) {
  return vals
    .map(elm => elm.constructor.name === 'ManyValues' ? elm.sumTotal() : elm.value)
    .reduce((prev, curr) =>  prev + curr);
}

let singleValue = new SingleValue(11);
let otherValues = new ManyValues();
otherValues.push(22);
otherValues.push(33);
console.log(sum([singleValue, otherValues]));
