class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	deepCopy() {
		return new Point(this.x, this.y);
	}
}

class Line {
	constructor(start, end) {
		this.start = start;
		this.end = end;
	}

	deepCopy() {
		return new Line(this.start.deepCopy(), this.end.deepCopy());
	}
}

class Serializer {
  constructor(types) {
    this.types = types;
  }

  markRecursive(object) {
    let idx = this.types.findIndex(t => {
      return t.name === object.constructor.name;
    });

    if (idx !== -1) {
      object['typeIndex'] = idx;
      for (let key in object) {
        if (object.hasOwnProperty(key))
          this.markRecursive(object[key]);
      }
    }
  }

  reconstructRecursive(object) {
    if (object.hasOwnProperty('typeIndex')) {
      let type = this.types[object.typeIndex];
      let obj = new type();
      for (let key in object) {
        if (object.hasOwnProperty(key) && object[key] != null) 
        obj[key] = this.reconstructRecursive(object[key]);
      }
      delete obj.typeIndex;
      return obj;
    }
  }

  clone(object) {
    this.markRecursive(object);
    let copy = JSON.parse(JSON.stringify(object));
    return this.reconstructRecursive(copy);
  }
}

let line = new Line('p1', 'p2');
let s = new Serializer([Line, Point]);
let line2 = s.clone(line);

line2.start = 'x1';
line2.end = 'y1';

console.log(line, line2);
