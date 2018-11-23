const Monitor = require('./monitor');

const monitor = new Monitor();
setInterval(monitor.showResources, 500);