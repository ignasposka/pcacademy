const express = require('express');
const CONFIG = require('./config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const studentRoute = require('./routes/student');
const userRoute = require('./routes/user');
const lectorRoute = require('./routes/lector');
const universityRoute = require('./routes/university');
const passport = require('passport');
const handleError = require('./errorHandler');

require('./authentication/localStrategy');
require('./authentication/jwtStrategy');

if(process.env.NODE_ENV && process.env.NODE_ENV === 'test'){
    mongoose.connect(CONFIG.CONNECTION_STRING_TEST)
}
else{
    mongoose.connect(CONFIG.CONNECTION_STRING)
}

mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/students', passport.authenticate('jwt', {session: false}), studentRoute);
app.use('/lectors', passport.authenticate('jwt', {session: false}), lectorRoute);
app.use('/universities', passport.authenticate('jwt', {session: false}), universityRoute);
app.use('/user', userRoute);
app.use(handleError);

app.listen(CONFIG.PORT, () => {
    console.log('Server started!');
})

module.exports = app;