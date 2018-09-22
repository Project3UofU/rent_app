const db = require("../models");
const mongoose = require('mongoose');
const utils = require('../utils');

module.exports = {

    addUnit: function (req, res) {
        const { rent, securityDeposit, name, propertyID } = req.body;
        if (utils.error(rent, "Missing rent") || utils.error(securityDeposit, "Missing securityDeposit") || utils.error(propertyID, "Missing propertyID")
            || utils.error(name, "Missing name")) {
            return;
        }

        let newUnit = {
            name: name,
            rent: rent,
            securityDeposit: securityDeposit,
            property: mongoose.Types.ObjectId(propertyID)
        }

        db.Unit.collection
            .insertOne(newUnit)
            .then(unit => res.json(newUnit))
            .catch(err => res.status(422).json(err));
    },

};
