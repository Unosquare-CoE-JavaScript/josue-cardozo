class Code {
  constructor() {
    this.className = '';
    this.fields = [];
  }

  buildConstructorParams() {
    return this.fields.toString();
  }

  buildConstructorBody() {
    return this.fields.map(field => `\tthis.${field} = ${field}`).join('\n');
  }

  toString() {
    return `class ${this.className} {
  constructor(${this.buildConstructorParams()}) {
  ${this.buildConstructorBody()}
  }
}`
  }
}

class CodeBuilder {
  constructor(code=new Code()) {
    this.code = code;
  }

  get name() {
    return new CodeNameBuilder(this.code);
  }

  get fields() {
    return new FieldsBuilder(this.code);
  }

  build() {
    return this.code;
  }
}

class CodeNameBuilder extends CodeBuilder {
  constructor(code) {
    super(code);
  }

  as(className) {
    this.code.className = className;
    return this;
  }
}

class FieldsBuilder extends CodeBuilder {
  constructor(code) {
    super(code);
  }

  withParam(param) {
    this.code.fields.push(param);
    return this;
  }
}

let cb = new CodeBuilder();
let code = cb
  .name.as('Prueba')
  .fields.withParam('v1')
  .fields.withParam('v2')
  .fields.withParam('v3')
  .fields.withParam('v4')
  .build();

console.log(code.toString());
