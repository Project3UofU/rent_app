const db = require("../models");
const mongoose = require('mongoose');
const utils = require('../utils');

module.exports = {

    findById: function (req, res) {
        const { id } = req.params;
        db.Tenant
            .findById(id)
            .select("+token") // Send back the token
            .then(data => res.json({ tenant: data }))
            .catch(err => utils.error(res, 422, err.message));
    },
    
    // TODO: Needs testing
    addWorkOrder: function (req, res) {
        const { service, unit, tenant, landlord } = req.body;

        var newWorkOrder = {
            service: service,
            unit: unit,
            tenant: tenant || null,
            landlord: landlord || null
        }
        
        db.Tenant.collection
            .insertOne(newWorkOrder)
            .then(data => res.json({ workOrder: data.ops[0] || null }))
            .catch(err => {
                utils.error(res, 422, err.message)
            });
    },

};