const db = require("../models");
const mongoose = require('mongoose');
const utils = require('../utils');
const bcrypt = require('bcryptjs')
const userController = require("./userController");

module.exports = {

    // Not currently needed
    findById: function (req, res) {
        const { id } = req.params;
        db.Tenant
            .findById(id)
            .then(data => res.json({ tenant: data }))
            .catch(err => utils.error(res, 422, err.message));
    },

    remove: function (req, res) {
        const { id } = req.body;
        db.Tenant
            .deleteOne({ _id: id })
            .then(data => res.json({ tenant: data }))
            .catch(err => utils.error(res, 422, err.message));
    },

    // /api/tenant/setup
    // Used for first time tenant setup after the landlord adds them
    setup: function (req, res) {
        const { tenantID, password } = req.body
        if (password.length < 4) {
            return utils.error(res, 422, "Password must be at least 4 characters.")
        }
        
        db.User
            .findById(tenantID)
            .then(user => {
                if (user.password.length > 0) {
                    return utils.error(res, 422, "Tenant already set up, try logging in.")
                }

                user.local.password = bcrypt.hashSync(password, 10) // Encrypt the password
                return user.save().then(() => {
                    return userController.user
                })
            })
            .catch(err => utils.error(res, 422, err.message));
    },

};