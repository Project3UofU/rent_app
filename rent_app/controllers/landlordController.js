const db = require("../models");
let mongoose = require('mongoose');
let utils = require('../utils');

module.exports = {

    // Not currently needed
    findById: function (req, res) {
        const { id } = req.params;
        db.Landlord
            .findById(id)
            .then(data => res.json({ landlord: data }))
            .catch(err => utils.error(res, 422, err.message));
    },

    // Not currently needed
    create: function (req, res) {
        const {} = req.body;
        var newLandlord = {}
        db.Landlord
            .create(newLandlord)
            .then(data => res.json({ landlord: data }))
            .catch(err => utils.error(res, 422, err.message));
    },

    // Not currently needed
    update: function (req, res) {
        // TODO: Worry about this later if needed
        const { id } = req.params;
        db.Landlord
            .findOneAndUpdate({ _id: id }, req.body)
            .then(data => res.json({ property: data || null }))
            .catch(err => utils.error(res, 422, err.message));
    },

    // Not currently needed
    remove: function (req, res) {
        // TODO: Worry about this later if needed
        const { id } = req.body;
        db.Landlord
            .deleteOne({ _id: id })
            .then(data => res.json({ property: data.ops[0] || [] }))
            .catch(err => utils.error(res, 422, err.message));
    },
    
    addProperty: function (req, res) {
        const { city, state, zip, comments, nickname, landlordID } = req.body;
        var newProperty = {
            city: city,
            state: state,
            zip: zip,
            comments: comments,
            nickname: nickname,
            landlord: mongoose.Types.ObjectId(landlordID)
        }

        db.Property.collection
            .insertOne(newProperty)
            .then(data => res.json({ property: data.ops[0] || null }))
            .catch(err => utils.error(res, 422, err.message));
    }

};
