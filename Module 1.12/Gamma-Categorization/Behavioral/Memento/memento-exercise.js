class Token
{
  constructor(value=0)
  {
    this.value = value;
  }
}

class Memento
{
  constructor()
  {
    this.tokens = [];
  }
}

class TokenMachine
{
  constructor()
  {
    this.tokens = [];
  }

  addTokenValue(value)
  {
    return this.addToken(new Token(value));
  }

  addToken(token)
  {
    let m = new Memento();
    m.tokens = this.tokens.map(token => new Token(token.value));
    this.tokens.push(token);
    return m;
  }

  revert(m)
  {
    if(m.tokens.length > 0) {
        this.tokens = m.tokens.map(token => new Token(token.value));
    }
  }
}