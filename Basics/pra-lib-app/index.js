// npm i pra-lib-10
// npm i -g pra-lib-10

var pralib  = require('pra-lib-10');

// Single Parameter Functions

var result = pralib.bina(7);
console.log(result);

var result = pralib.quada(7);
console.log(result);

var result = pralib.hexa(7);
console.log(result);

var result = pralib.nona(7);
console.log(result);

// a = 2
// b = 3
// var result = (a * a * a * a * a) * b;
// console.log(result); // Output : 96

// Double Parameter Functions

var result = pralib.cubpow(7, 2);
console.log(result);

var result = pralib.pentpow(7, 3);
console.log(result);