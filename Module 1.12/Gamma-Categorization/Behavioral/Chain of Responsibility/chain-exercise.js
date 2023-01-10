class Goblin {
  constructor(game, baseAttack = 1, baseDefense = 1) {
    this.game = game;
    this.attack = baseAttack;
    this.defense = baseDefense;
    this.increaseGoblinsDefense(this.game.goblins);
    this.game.kingGoblin ? this.increaseGoblinsDefense(this.game.goblins) : null;
    this.game.goblins.push(this);
  }

  increaseGoblinsDefense(goblins) {
    goblins.forEach((goblin) => goblin.defense++);
  }

  toString() {
    return `Goblin ${this.attack} / ${this.defense}`;
  }
}

class GoblinKing extends Goblin {
  constructor(game) {
    super(game, 3, 3);
    this.game = game;
    this.increaseGoblinsAttack(this.game.goblins);
    this.game.kingGoblin = this;
  }

  increaseGoblinsAttack(goblins) {
    goblins.forEach((goblin) => goblin.attack++);
  }

  toString() {
    return `King Goblin ${this.attack} / ${this.defense}`;
  }
}

class Game {
  constructor() {
    this.goblins = [];
    this.kingGoblin;
  }
}

let game = new Game();
let goblin = new Goblin(game);
let goblin1 = new Goblin(game);
let goblin2 = new Goblin(game);
let goblin3 = new Goblin(game);
//let kgoblin = new GoblinKing(game);
//console.log(kgoblin.toString());
console.log(goblin.toString());
