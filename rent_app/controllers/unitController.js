const db = require("../models");
const mongoose = require('mongoose');
const utils = require('../utils');

module.exports = {

    addTenant: function (req, res) {
        const { name, phone, email, preferredMethodOfContact, password, unitID } = req.body;
        if (utils.error(name, "Missing name") || utils.error(phone, "Missing phone") || utils.error(email, "Missing email")
            || utils.error(password, "Missing password") || utils.error(preferredMethodOfContact, "Missing preferredMethodOfContact")
            || utils.error(unitID, "Missing unitID")) {
            return;
        }

        var newTenant = {
            name: name,
            phone: phone,
            email: email,
            token: "", // TODO: Generate token for the tenant so it can be send back down to the client
            preferredMethodOfContact: preferredMethodOfContact,
            unit: mongoose.Types.ObjectId(unitID)
        }

        let returnedTenant = Object.assign({}, newTenant); 
        newTenant.password = password; // TODO: Encrypt the password
        
        db.Tenant.collection
            .insertOne(newTenant)
            .then(tenant => res.json(returnedTenant)) // TODO: Send back the returned tenant object with their token?
            .catch(err => res.status(422).json(err));
    },

};