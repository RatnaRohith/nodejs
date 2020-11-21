const fs = require('fs');
const path = require('path');

//Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('Folder Created');
// });

//Create File
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', err => {
    if(err) throw err;
    console.log('File Created');
});
