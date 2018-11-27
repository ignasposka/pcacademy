const express = require('express');

const app = express();

app.listen(CONFIG.PORT, () => {
    console.log('Server started!');
})