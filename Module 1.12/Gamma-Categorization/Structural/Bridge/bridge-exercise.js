class Shape {
  constructor(renderer, name) {
      this.renderer = renderer.whatToRenderAs;
      this.name = name;
  }
  
  toString() {
      return `Drawing ${this.name} as ${this.renderer}`;
  }
}

class Circle extends Shape {
  constructor(renderer) {
      super(renderer, 'circle');
  }
}

class Square extends Shape {
  constructor(renderer) {
      super(renderer, 'square');
  }
}

class Triangle extends Shape {
  constructor(renderer) {
      super(renderer, 'triangle');
  }
}

class VectorRenderer {
  get whatToRenderAs() {
      return 'lines';
  }
}

class RasterRenderer {
  get whatToRenderAs() {
      return 'pixels';
  }
}

let raster = new RasterRenderer();
let vector = new VectorRenderer();
let circle = new Circle(raster);
let triangle =  new Triangle(vector);

console.log(circle.toString());
console.log(triangle.toString());
