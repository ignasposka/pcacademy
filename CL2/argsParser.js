let args = {};

for(let i = 0; i < process.argv.length; i++){
    let argument = process.argv[i];
    let splitted = argument.split("=");

    if(splitted[0] && splitted[1]){
        args[splitted[0]] = splitted[1];
    }else if (splitted[0]){
        args[i] = splitted[0];
    }
}


module.exports = args;