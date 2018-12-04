const args = require('./argsParser');
const readText = () => {

const fs = require('fs');

const patth = process.argv[2];
fs.readFile(args.path, 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }

});
}



module.exports = readText;