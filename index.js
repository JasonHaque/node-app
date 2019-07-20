const log = require('./logger');
log('message');


//using node.js path module
const path = require('path');

var pathObj = path.parse(__filename);
console.log(pathObj);

