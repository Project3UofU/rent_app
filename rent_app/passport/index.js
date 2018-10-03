const passport = require('passport');
const LocalStrategy = require('./localStrategy');
const GoogleStrategy = require('./googleStrategy')
const User = require('../models/user');

//used to serialize the user for the session
passport.serializeUser((user, done) => {
	console.log('SerializeUser');
	done(null, { _id: user._id });
})

//used to deserialize the user
passport.deserializeUser((id, done) => {
	console.log('DeserializeUser');
	User
		.findById(id)
		.then(user => done(null, user))
		.catch(err => done(err, null, { error: 'User does not exist' })); 
})

// ==== Register Strategies ====
passport.use(LocalStrategy);
passport.use(GoogleStrategy)

module.exports = passport;
