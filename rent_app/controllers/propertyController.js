const db = require("../models");
const mongoose = require('mongoose');
const utils = require('../utils');

module.exports = {

    addUnit: function (req, res) {
        const { bedrooms, bathroom, comments, furnished, name, pets, parking } = req.body;

        let newUnit = {
            bedrooms: bedrooms,
            bathroom: bathroom,
            comments: comments,
            furnished: furnished,
            name: name,
            pets: pets,
            parking: parking,
            wdHookup: wdHookup,
            rent: rent,
            securityDeposit: securityDeposit,
            smoking: smoking,
            property: mongoose.Types.ObjectId(propertyID)
        }
        
        db.Unit.collection
            .insertOne(newUnit)
            .then(data => res.json({ unit: data.ops[0] || null }))
            .catch(err => utils.error(res, 422, err.message));
    },

    remove: function (req, res) {
        const { id } = req.body;
        db.Property
            .deleteOne({ _id: id })
            .then(data => res.json({ property: data }))
            .catch(err => utils.error(res, 422, err.message));
    }

};
