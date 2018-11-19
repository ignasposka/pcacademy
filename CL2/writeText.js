const readText = require('./readText');
const args = require('./argsParser');
const fs = require('fs');

console.log(args.path);

const patth = "C:\\Users\\Admin\\Downloads\\file.txt";
const context = process.argv[3];

console.log(patth);

if(process.argv[4] === '-a'){
    fs.appendFile(args.path, context, (err) => {
        if (err) {
            console.log(err);
        }
    })
} else {
fs.writeFile(args.path, context, (err) => {
    if (err) {
        console.log(err);
    }
})
}
readText();
