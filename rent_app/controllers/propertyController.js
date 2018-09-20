const db = require("../models");
let mongoose = require('mongoose');
require('../utils');

module.exports = {

    addUnit: function (req, res) {
        const { rent, securityDeposit, name, propertyID } = req.body;
        if (error(rent, "Missing rent") || error(securityDeposit, "Missing securityDeposit") || error(propertyID, "Missing propertyID")
            || error(name, "Missing name")) {
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
