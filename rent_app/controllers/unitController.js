const db = require("../models");
const mongoose = require('mongoose');
const utils = require('../utils');

module.exports = {

    addTenant: function (req, res) {
        const { name, phone, email, preferredMethodOfContact, password, unitID } = req.body;

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
            .then(data => res.json({ tenant: data.ops[0] || null }))
            .catch(err => {
                utils.error(res, 422, err.message)
            });
    },

    // May not need this function but it'll be good to keep for reference
    // Getting a landord via a unitID
    landlord: function (req, res) {
        const { id } = req.params;
        db.Unit
            .findById(id)
            .select('property')
            .populate({
                path: 'property',
                select: 'landlord',
                populate: {
                    path: 'landlord'
                }
            })
            .then(data => res.json({ landlord: data.property.landlord }))
            .catch(err => utils.error(res, 422, err.message));
    }

};