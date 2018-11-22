const os = require('os');
const osUtils = require('os-utils');

const showResources = () => {
    printMemoryUsage();
    printCpuUsage();
};

const coefToPercents = (coeficient) => {
    return (coeficient * 100).toFixed(2);
};

const printCpuUsage = () => {
    osUtils.cpuUsage((usage) => {
        console.log(`CPU Usage: ${coefToPercents(usage)}%`);
    });
};

const printMemoryUsage = () => {
    const usedMemoryInPercents = coefToPercents(1 - (os.freemem() / os.totalmem()));
    console.log(`Free memory: ${usedMemoryInPercents}%`);
}

setInterval(showResources, 500);