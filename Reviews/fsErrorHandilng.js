const fs = require('fs');

try {
    let rawdata = fs.readFileSync('../Module 1.7');
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
        throw err;
    }
}
