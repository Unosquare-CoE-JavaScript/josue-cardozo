// This is the adaptee
class Square {
	constructor(side) {
		this.side = side;
	}
}

function area(rectangle) {
	return rectangle._width * rectangle._height;
}


class SquareToRectangleAdapter {
	constructor(square) {
		this._height = square.side;
		this._width = square.side;
	}
}
