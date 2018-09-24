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

        db.Unit.collection
            .insertOne(newUnit)
            .then(data => res.json({ unit: data.ops[0] || null }))
            .catch(err => utils.error(res, 422, err.message));
    },

};
