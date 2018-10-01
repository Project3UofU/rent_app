const db = require("../models");
const mongoose = require('mongoose');
const utils = require('../utils');

module.exports = {

    addComment: function (req, res) {

        // TODO: Check that the landlord/tenant are allowed to add a work order to the given unit
        const { text, workOrderID, tenantID, landlordID } = req.body;
        var newWorkOrder = {
            test: text,
            workOrder: mongoose.Types.ObjectId(workOrderID),
            tenant: tenantID ? mongoose.Types.ObjectId(tenantID) : null, // Optional
            landlord: landlordID ? mongoose.Types.ObjectId(landlordID) : null, // Optional
        }
        
        db.WorkOrder.collection
            .insertOne(newWorkOrder)
            .then(data => res.json({ workOrder: data.ops[0] || null }))
            .catch(err => {
                utils.error(res, 422, err.message)
            });
    },

    update: function(req, res) {
        const { service, description, urgent, read, completed } = req.body;
        let updates = {}
        if (service) { updates.service = service; }
        if (description) { updates.description = description; }
        if (urgent) { updates.urgent = urgent; }
        if (read) { updates.read = read; }
        if (completed) { updates.completed = completed; }
        db.WorkOrder.collection
            .findOneAndUpdate(newWorkOrder, updates)
            .then(data => res.json({ workOrder: data.ops[0] || null }))
            .catch(err => {
                utils.error(res, 422, err.message)
            });
    }

};