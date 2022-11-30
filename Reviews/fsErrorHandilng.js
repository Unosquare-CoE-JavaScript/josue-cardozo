const fs = require('fs');

const dir = '../Module 1.7';
const jsonFile = 'sample.json';
const wrongJson = 'wrong.json';
const missingFile = 'notoy.json';

try {
    let rawdata = fs.readFileSync(wrongJson);
    let student = JSON.parse(rawdata);  
    console.log(student);    
} catch (err) {
    if (err.code === 'ENOENT') {
        console.log('File not found!');
    }
    else if(err.code === 'EISDIR'){
        console.log('It is a Dir!');
    }
     else {
        console.log('Invalid JSON!');
    }
}
