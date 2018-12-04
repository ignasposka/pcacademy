/* eslint-disable no-console */
const express = require('express');
require('dotenv').config();

const app = express();

app.listen(process.env.API_PORT, () => {
    console.log('Server starteddd!');
});
