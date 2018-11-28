const express = require('express');
const CONFIG = require('./config');

const app = express();

app.listen(CONFIG.PORT, () => {
    console.log('Server started!');
})