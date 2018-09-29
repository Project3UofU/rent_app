const db = require("../models");
const utils = require('../utils');
const Tenant = require('../models/tenant')
const User = require('../models/user')
const Landlord = require('../models/landlord')

module.exports = {

    // Used for making Landlords. Tenants are created via the 'addTenant' function in the 'unitController'
    createUser: function (req, res) {
        const { email, password, firstName, lastName, businessPhone, cellPhone, homePhone, fax, businessAddress, mailingAddress, preferredMethodOfContact } = req.body
        User.findOne({ 'local.email': email }, (err, userMatch) => {
            if (userMatch) {
                // Found existing user
                return utils.error(res, 422, `Email '${email}' already in use`)
            }
            
            // Create new user
            const newUser = new User({
                'local.email': email,
                'local.password': password
            })

            let landlord = new Landlord({
                firstName: firstName,
                lastName: lastName,
                businessPhone: businessPhone,
                cellPhone: cellPhone,
                homePhone: homePhone,
                fax: fax,
                businessAddress: businessAddress,
                mailingAddress: mailingAddress,
                preferredMethodOfContact: preferredMethodOfContact
            })
            landlord.save((err, savedLandlord) => {
                if (err) return utils.error(res, 422, err.message)
                newUser.landlord = savedLandlord._id
                newUser.save((err, savedUser) => {
                    if (err) return utils.error(res, 422, err.message)
                    return res.json({ user: savedUser })
                })
            })

        })
    },

    logout: function (req, res) {
        if (req.user) {
            req.session.destroy()
            res.clearCookie('connect.sid')
        }

        return res.json({ status: 'logged out' })
    },

    user: function (req, res) {
        const { _id, landlord, tenant } = req.user;
        if (landlord) {
            return module.exports.landlord(req, res, _id)
        } else if(tenant) {
            return module.exports.tenant(req, res, _id)
        }

        return utils.error(res, 422, "Invalid user")
    },

    landlord: function(req, res, id) {
        return db.User.findById(id)
            .select("-local.password -__v") // TODO: Find a better way to prevent the password from going down
            .populate({
                path: 'landlord',
                select: '-__v',
                populate: {
                    path: 'properties',
                    populate: {
                        path: 'units',
                        populate: {
                            path: 'tenants'
                        },
                        populate: {
                            path: 'workOrders',
                            populate: {
                                path: 'comments'
                            }
                        }
                    },
                }
            })
            .then(user => {
                return res.json({ user: user })
            })
            .catch(err => utils.error(res, 422, "Oops"));
    },

    tenant: function(req, res, id) {
        return db.User.findById(id)
            .select("-local.password -__v") // TODO: Find a better way to prevent the password from going down
            .populate({
                path: 'tenant',
                populate: {
                    path: 'unit',
                    populate: {
                        path: 'workOrders',
                        populate: {
                            path: 'comments'
                        }
                    }
                }
            })
            .then(user => {
                return res.json({ user: user })
            })
            .catch(err => utils.error(res, 422, "Oops"));
    }

}