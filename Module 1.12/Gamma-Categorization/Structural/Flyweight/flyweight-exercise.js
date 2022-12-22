class Sentence
{
  constructor(plainText)
  {
    this.plainText = plainText.split(' ');
    this.formatting = [];
    this.capitalize = false;
  }

  at(index)
  {
    let word = new Sentence(this.plainText[index]);
    this.formatting.push(word);
    return word;
  }
  
  toString()
  {
    let buffer = [];
    for (let i in this.plainText) {
      let c = this.plainText[i];
      for (let word of this.formatting) {
        if (word.capitalize && word.plainText[0] === c)
          c = c.toUpperCase();
      }
      buffer.push(c);
    }
    return buffer.join(' ');
  }
}

let stc = new Sentence('hola mundo');
stc.at(0).capitalize = true;
console.log(stc.toString());
