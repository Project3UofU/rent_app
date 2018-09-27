const passport = require('passport');
const LocalStrategy = require('./localStrategy');
// const GoogleStratgey = require('./googleStrategy')
const User = require('../models/user');

passport.serializeUser((user, done) => {
	console.log('SerializeUser');
	done(null, { _id: user._id });
})

passport.deserializeUser((id, done) => {
	console.log('DeserializeUser');
	User
		.findById(id)
		.then(user => done(null, user))
		.catch(err => done(err, null, { error: 'User does not exist' })); 
})

// ==== Register Strategies ====
passport.use(LocalStrategy);
// passport.use(GoogleStratgey)

module.exports = passport;
