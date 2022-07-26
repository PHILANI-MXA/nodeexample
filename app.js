/*console.log("Philani")
console.log(__dirname);
console.log(__filename);
const os = require('os');
const path = require('path')
console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log(path.extname(__filename));
console.log(path.parse(__filename));*/

/*function example(a, b) {
    return a + b;
}
module.exports = example;*/

/*const sum = require('./example');
console.log((9, 8));*/


/*module.exports = addition = (a, b) => {
    return a + b;
}*/

/*const file = require('fs');
const path = require('path');

file.readFile('./data.txt', 'utf8',
    (err, data) => {
        if (err) throw err;
        console.log(data);
    });

    file.writeFile(path.join(__dirname, './data.txt')), 'Example 2,*/

/*const fs = require('fs');

const content = 'Some content!';

fs.writeFile('/Users/joe/test.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});

// Node.js program to demonstrate the
// fs.appendFile() method

// Import the filesystem module
const fs = require('fs');

// Get the file contents before the append operation
console.log("\nFile Contents of file before append:",
fs.readFileSync("example_file.txt", "utf8"));

fs.appendFile("example_file.txt", "World", (err) => {
if (err) {
	console.log(err);
}
else {
	// Get the file contents after the append operation
	console.log("\nFile Contents of file after append:",
	fs.readFileSync("example_file.txt", "utf8"));
}
});*/

const file = require('fs');
const path = require('path');
file.readFile('./data.txt', 'utf8', (err, data)=>{
    if(err) throw err;
    console.log(data);
});
console.log('Read Me');
process.on('uncaughtException', err=> {
    console.log(err.message);
});

file.writeFile(path.join(__dirname,'./data.txt'), 'hiii', err=> {
    if(err) throw err;
    console.log('Writen');
});

file.appendFile(path.join(__dirname,'./data.txt'), '\nappended', err=> {
    if(err) throw err;
    console.log('Appending');
});
console.log('Appending');