const db = require("../models");
let mongoose = require('mongoose');
require('../utils');

module.exports = {

    addTenant: function (req, res) {
        const { name, phone, email, preferredMethodOfContact, password, unitID } = req.body;
        if (error(name, "Missing name") || error(phone, "Missing phone") || error(email, "Missing email")
            || error(password, "Missing password") || error(preferredMethodOfContact, "Missing preferredMethodOfContact")
            || error(unitID, "Missing unitID")) {
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
            .then(tenant => res.json(returnedTenant))
            .catch(err => res.status(422).json(err));
    },

};