const os = require('os');
const osUtils = require('os-utils');
const logUpdate = require('log-update');

let cpuUsageLast = '-';
let memoryUsageLast = '-';

const showResources = () => {
    printMemoryUsage();
    printCpuUsage();
};

const coefToPercents = (coeficient) => {
    return (coeficient * 100).toFixed(2);
};

const printCpuUsage = () => {
    osUtils.cpuUsage((usage) => {
        updateStats(coefToPercents(usage), memoryUsageLast);
    });
};

const printMemoryUsage = () => {
    const usedMemoryInPercents = coefToPercents(1 - (os.freemem() / os.totalmem()));
    updateStats(cpuUsageLast, usedMemoryInPercents);
}

const updateStats = (cpuUsage, memoryUsage) => {
    cpuUsageLast = cpuUsage;
    memoryUsageLast = memoryUsage;

    logUpdate(
        `
        ${`CPU usage: ${cpuUsage}%`}
        ${`Memory usage: ${memoryUsage}%`}
        `
    )
}

module.exports = showResources;