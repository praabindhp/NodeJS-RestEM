const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files)

// Output : [ '.git', '.gitignore', 'LICENSE', 'README.md', 'fsModule.js' ]

fs.readdir('./', function(err, files){
    if (err) console.log('Error', err);
    else console.log(files)

});