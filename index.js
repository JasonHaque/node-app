const log = require('./logger');
log('message');


//using node.js path module
const path = require('path');

var pathObj = path.parse(__filename);
console.log(pathObj);

//using node.js os module

const os = require('os');

var totalmem = os.totalmem();
var freemem = os.freemem();

//using ES6 template strings
console.log(`Total memory: ${totalmem}`);
console.log(`Free memory: ${freemem}`);

//using file system  in node.js

const fs = require('fs');

fs.readdir('./', function (err,files) {
    if(err)console.log('error ',err);
    else console.log(files);
});

