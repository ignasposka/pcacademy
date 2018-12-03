const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/user');

const signUpStrategy = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, createUser);

async function createUser (email, password, done) {
    try {
        const user = await UserModel.create({email, password});
        done(null, user);

    } catch(error) {
        done(error);
    }
}

loginStrategy = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, loginUser);

async function loginUser (email, password, done) {
    try {
        const user = await UserModel.findOne({email});
        if(!user){
            done(null, false, {message: 'User not found'});
        }

        const isValid = await user.isValidPassword(password);
        if(!isValid){
            done(null, false, {message: 'Wrong password'});
        }

        return done(null, user, {message: 'Logged in successfully :)'});

    } catch(error) {
        done(error);
    }
}

passport.use('signup', signUpStrategy);
passport.use('login', loginStrategy);