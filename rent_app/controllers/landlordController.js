const db = require("../models");
let mongoose = require('mongoose');
require('../utils');

module.exports = {
    findAll: function (req, res) {
        db.Landlord
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findById: function (req, res) {
        const { id } = req.params;
        db.Landlord
            .findById(id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: function (req, res) {
        const { name, password } = req.body;
        var newLandlord = {
            name: name,
            token: "" // TODO: Generate token for the landlord so it can be send back down to the client
        }

        let returnedLandlord = Object.assign({}, newLandlord);
        newLandlord.password = password; // TODO: Encrypt the password
        
        db.Landlord
            .create(newLandlord)
            .then(landlord => res.json(returnedLandlord)) // TODO: Send back the returned landlord object with their token?
            .catch(err => res.status(422).json(err));
    },

    update: function (req, res) {
        // TODO: Worry about this later if needed
        db.Landlord
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    remove: function (req, res) {
        // TODO: Worry about this later if needed
        const { id } = req.params;
        db.Landlord
            .deleteOne({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    addProperty: function (req, res) {
        const { address, name, landlordID } = req.body;
        if (error(res, address, "Missing address") || error(res, name, "Missing name") || error(res, landlordID, "Missing landlordID")) {
            return;
        }

        var newProperty = {
            address: address,
            name: name,
            landlord: mongoose.Types.ObjectId(landlordID)
        }

        db.Property.collection
            .insertOne(propertySeed(newProperty))
            .then(property => res.json(property))
            .catch(err => res.status(422).json(err));
    },

    info: function (id) {
        return db.Landlord.findOne({ _id: id }).populate({
            path: 'properties',
            populate: {
                path: 'units',
                populate: {
                    path: 'tenants',
                    // select: 'created -_id' // Example of how to show `created` and hide `_id`
                }
            }
        })
    },
};
