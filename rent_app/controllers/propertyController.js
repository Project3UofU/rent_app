const db = require("../models");
const mongoose = require('mongoose');
const utils = require('../utils');

module.exports = {

    addUnit: function (req, res) {
        const { rent, securityDeposit, name, propertyID } = req.body;

        let newUnit = {
            name: name,
            rent: rent,
            securityDeposit: securityDeposit,
            property: mongoose.Types.ObjectId(propertyID)
        }
        console.log("TRY THIS" + JSON.stringify(newUnit, 0, 2))
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
