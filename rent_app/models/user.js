const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
mongoose.promise = Promise

const userSchema = new Schema({
	tenant: {
		type: Schema.Types.ObjectId,
		ref: "Tenant",
		required: false
	},
	landlord: {
		type: Schema.Types.ObjectId,
		ref: "Landlord",
		required: false
	},
	local: {
		username: { type: String, unique: true, required: false },
		password: { type: String, unique: false, required: false, default: "password" },
	},
	google: {
		googleId: { type: String, required: false }
	}
})

// Define schema methods
userSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.local.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
	if (!this.local.password) {
		console.log('=======NO PASSWORD PROVIDED=======')
		next()
	} else {
		this.local.password = this.hashPassword(this.local.password)
		next()
	}
})

// Create reference to User & export
const User = mongoose.model('User', userSchema)
module.exports = User
