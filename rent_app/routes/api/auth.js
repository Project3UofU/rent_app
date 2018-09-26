const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const Landlord = require('../../models/landlord')
const passport = require('../../passport')
const middleware = require("../../middleware");
let utils = require('../../utils');

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))
router.get(
	'/google/callback',
	passport.authenticate('google', {
		successRedirect: '/',
		failureRedirect: '/login'
	})
)

// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})

router.post('/login',
	passport.authenticate('local'),
	(req, res) => {
		console.log('POST to /login')
		const user = JSON.parse(JSON.stringify(req.user)) // hack
		const cleanUser = Object.assign({}, user)
		if (cleanUser.local) {
			console.log(`Deleting ${cleanUser.local.password}`)
			delete cleanUser.local.password
		}
		res.json({ user: cleanUser })
	}
)

router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
})

router
	.route('/signup')
	.post(middleware.paramsCheck(["username", "password", "firstName", "lastName", ["businessPhone", "cellPhone", "homePhone", "email"]]))
	.post((req, res) => {
		const { username, firstName, lastName, password, email, businessPhone, cellPhone, homePhone, fax, businessAddress, mailingAddress, homeAddress } = req.body
		User.findOne({ 'local.username': username }, (err, userMatch) => {
			
			if (userMatch) {
				// Found existing user
				return res.json({
					error: `Sorry, already a user with the username: ${username}`
				})
			}
			
			// Create new user
			const newUser = new User({
				'local.username': username,
				'local.password': password,
				firstName: firstName,
				lastName: lastName,
				email: email,
				businessPhone: businessPhone,
				cellPhone: cellPhone,
				homePhone: homePhone,
				fax: fax,
				businessAddress: businessAddress,
				mailingAddress: mailingAddress,
				homeAddress: homeAddress
			})

			let landlord = new Landlord({})
			landlord.save((err, savedLandlord) => {
				if (err) return utils.error(res, 422, err.message)
				newUser.landlord = savedLandlord._id
				newUser.save((err, savedUser) => {
					if (err) return utils.error(res, 422, err.message)
					return res.json(savedUser)
				})
			})
			
		})
	})

module.exports = router
