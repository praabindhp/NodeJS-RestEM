const path = require('path');

var filePath = path.parse(__filename);
var dirPath = path.parse(__dirname);

console.log(filePath);
console.log(dirPath);

/* Output:
{
    root: '/',
    dir: '/home/praabindhp/Documents/Coding/NodeJS/NodeJS-RestEM/Basics',
    base: 'pathModule.js',
    ext: '.js',
    name: 'pathModule'
  }
  {
    root: '/',
    dir: '/home/praabindhp/Documents/Coding/NodeJS/NodeJS-RestEM',
    base: 'Basics',
    ext: '',
    name: 'Basics'
  }
*/