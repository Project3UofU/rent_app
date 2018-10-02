const router = require("express").Router();
const passport = require('../../passport')
const userController = require("../../controllers/userController");
const middleware = require("../../middleware");

// TODO: Handle google login
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))
router.get(
	'/google/callback',
	passport.authenticate('google', {
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
	.post(middleware.paramsCheck(["email", "password", "firstName", "lastName", ["businessPhone", "cellPhone", "homePhone"]]))
	.post(userController.createUser)

module.exports = router
