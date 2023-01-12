const bcrypt = require('bcrypt');

let input = 'dog';
let salt = 8;

let hash = bcrypt.hashSync(input, 8);

console.log('\n\n' + hash + '\n\n');

let check = bcrypt.compareSync(input, hash)

console.log(check);
