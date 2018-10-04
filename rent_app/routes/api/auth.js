const router = require("express").Router();
const passport = require('../../passport')
const userController = require("../../controllers/userController");
const middleware = require("../../middleware");

// TODO: Handle google login
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
router.get(
	'/google/callback',
	passport.authenticate('googleAuth', {
		successRedirect: '/',
		failureRedirect: '/login'
	})
)

router
	.route('/user')
	.get(middleware.isAuthenticated)
	.get(userController.user)

router
	.route('/login')
	.post(passport.authenticate('local'), userController.user)

router
	.route('/logout')
	.post(middleware.isAuthenticated)
	.post(userController.logout)

router
	.route('/signup')
	.post(middleware.paramsCheck(["username", "password", "firstName", "lastName", ["businessPhone", "cellPhone", "homePhone"]]))
	.post(userController.createUser, passport.authenticate('local'), userController.user) // TODO: Figure out how to pass back an authenticated user from createUser

module.exports = router
