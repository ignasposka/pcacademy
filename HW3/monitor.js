const os = require('os');
const osUtils = require('os-utils');
const logUpdate = require('log-update');

class Monitor {

    constructor(){
        this.cpuUsage = '-';
        this.memoryUsage = '-';

        this.updateStats = this.updateStats.bind(this);
        this.showResources = this.showResources.bind(this);
    }

    showResources() {
        this.printMemoryUsage();
        this.printCpuUsage();
    };

    coefToPercents(coeficient) {
        return (coeficient * 100).toFixed(2);
    };

    printCpuUsage () {
        osUtils.cpuUsage((usage) => {
            this.updateStats(this.coefToPercents(usage), this.memoryUsage);
        });
    };

    printMemoryUsage() {
        const usedMemoryInPercents = this.coefToPercents(1 - (os.freemem() / os.totalmem()));
        this.updateStats(this.cpuUsage, usedMemoryInPercents);
    }

    updateStats (cpuUsage, memoryUsage) {
        this.cpuUsage = cpuUsage;
        this.memoryUsage = memoryUsage;

        logUpdate(
            `
            ${`CPU usage: ${cpuUsage}%`}
            ${`Memory usage: ${memoryUsage}%`}
            `
        )
    }
}

module.exports = Monitor;