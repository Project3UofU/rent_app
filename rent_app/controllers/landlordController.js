const db = require("../models");
let mongoose = require('mongoose');
let utils = require('../utils');

module.exports = {

    findById: function (req, res) {
        const { id } = req.params;
        db.Landlord
            .findById(id)
            .select("+token") // Send back the token
            .then(data => res.json({ landlord: data }))
            .catch(err => utils.error(res, 422, err.message));
    },

    create: function (req, res) {
        const { name, password, username } = req.body;
        var newLandlord = {
            name: name,
            password: password, // TODO: Encrypt the password
            token: ``, // TODO: Generate token for the landlord so it can be send back down to the client
            username: username
        }

        db.Landlord
            .create(newLandlord)
            .then(data => res.json({ landlord: data }))
            .catch(err => utils.error(res, 422, err.message));
    },

    update: function (req, res) {
        // TODO: Worry about this later if needed
        const { id } = req.params;
        db.Landlord
            .findOneAndUpdate({ _id: id }, req.body)
            .then(data => res.json({ property: data || null }))
            .catch(err => utils.error(res, 422, err.message));
    },

    remove: function (req, res) {
        // TODO: Worry about this later if needed
        const { id } = req.params;
        db.Landlord
            .deleteOne({ _id: id })
            .then(data => res.json({ property: data.ops[0] || [] }))
            .catch(err => utils.error(res, 422, err.message));
    },

    addProperty: function (req, res) {
        const { address, name, landlordID } = req.body;
        var newProperty = {
            address: address,
            name: name,
            landlord: mongoose.Types.ObjectId(landlordID)
        }

        db.Property.collection
            .insertOne(newProperty)
            .then(data => res.json({ property: data.ops[0] || null }))
            .catch(err => utils.error(res, 422, err.message));
    },

    info: function (req, res) {
        db.Landlord
            .find({})
            .populate({
                path: 'properties',
                populate: {
                    path: 'units',
                    populate: {
                        path: 'tenants',
                        // select: 'created -_id' // Example of how to show `created` and hide `_id`
                    }
                }
            })
            // .sort({ username: -1 }) // TODO: Update the sort order to name when it the landlord's name is in the model
            .then(data => res.json({ "landlords": data }))
            .catch(err => utils.error(res, 422, err.message));
    },
};
