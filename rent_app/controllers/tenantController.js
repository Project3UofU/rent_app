const db = require("../models");
const mongoose = require('mongoose');
const utils = require('../utils');

module.exports = {

    // Not currently needed
    findById: function (req, res) {
        const { id } = req.params;
        db.Tenant
            .findById(id)
            .then(data => res.json({ tenant: data }))
            .catch(err => utils.error(res, 422, err.message));
    },

};