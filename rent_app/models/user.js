const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
mongoose.promise = Promise

const userSchema = new Schema({
	firstName: { type: String, unique: true },
	lastName: { type: String, unique: true },
    email: { type: String, required: false },
    businessPhone: { type: String, required: false },
    cellPhone: { type: String, required: false },
    homePhone: { type: String, required: false },
    fax: { type: String, required: false },
    businessAddress: { type: String, required: false },
    mailingAddress: { type: String, required: false },
    homeAddress: { type: String, required: false },
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
		username: { type: String, unique: false, required: false },
		password: { type: String, unique: false, required: false, default: "password" }
	},
	google: {
		googleId: { type: String, required: false }
	}
})

// Define schema methods
userSchema.methods = {
	checkPassword: function(inputPassword) {
		return bcrypt.compareSync(inputPassword, this.local.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
userSchema.pre('save', function(next) {
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
