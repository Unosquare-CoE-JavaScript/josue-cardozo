class Event {
  constructor() {
    this.handlers = new Map();
    this.count = 0;
  }

  subscribe(handler) {
    this.handlers.set(++this.count, handler)
    return this.count;
  }

  unsubscribe(idx) {
    this.handlers.delete(idx);
  }

  fire(sender, args) {
    this.handlers.forEach(function (v, k) {
      v(sender, args);
    })
  }
}

let whatToQuery = Object.freeze({
  'attack': 1,
  'defense': 2
})

class Query {
  constructor(creatureName, whatToQuery, value) {
    this.creatureName = creatureName;
    this.whatToQuery = whatToQuery;
    this.value = value;
  }
}

class Game {
  constructor() {
    this.queries = new Event();
  }

  performQuery(sender, query) {
    this.queries.fire(sender, query);
  }
}

class Creature {
  constructor(game, name, attack, defense) {
    this.game = game;
    this.name = name;
    this.initial_attack = attack;
    this.initial_defense = defense;
  }

  get attack() {
    let q = new Query(
      this.name, whatToQuery.attack, this.initial_attack
    );
    this.game.performQuery(this, q)
    return q.value;
  }

  get defense() {
    let q = new Query(
      this.name, whatToQuery.defense, this.initial_defense
    );
    this.game.performQuery(this, q)
    return q.value;
  }

  toString() {
    return `${this.name} (${this.attack}/${this.defense})`
  }
}

class CreatureModifier {
  constructor(game, creature) {
    this.game = game;
    this.creature = creature;
    this.token = game.queries.subscribe(
      this.handle.bind(this)
    )
  }

  handle() {
    // this
  }

  dispose() {
    this.game.queries.unsubscribe(this.token);
  }
}

class DoubleAttackModifier extends CreatureModifier {
  constructor(game, creature) {
    super(game, creature);
  }

  handle(sender, query) {
    if (query.creatureName === this.creature.name && query.whatToQuery === whatToQuery.attack) {
      query.value *= 2;
    }
  }
}

class IncreaseDefenseModifier extends CreatureModifier {
  constructor(game, creature) {
    super(game, creature);
  }

  handle(sender, query) {
    if (query.creatureName === this.creature.name && query.whatToQuery === whatToQuery.defense) {
      query.value++;
    }
  }
}

let game = new Game();
let goblin = new  Creature(game, 'Strong Goblin', 2, 2);
console.log(goblin.toString());

let dam = new DoubleAttackModifier(game, goblin);
console.log(goblin.toString());

let idm = new IncreaseDefenseModifier(game, goblin);
console.log(goblin.toString());
idm.dispose();
console.log(goblin.toString());
