const db = require("../models");
const mongoose = require('mongoose');
const utils = require('../utils');

module.exports = {

    // TODO: Create a user for the tenant
    addTenant: function (req, res) {

        const { firstName, lastName, email, phone, numberOfTenants, numberOfDependents, ageOfDependents, comments, preferredMethodOfContact, unitID } = req.body
        // TODO: check that the landlord owns this unit
        // Create new user
        const newUser = new User({
            'local.email': "Not Set",
            'local.password': "", // Default password till the tenant updates it
        })

        let newTenant = new Tenant({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            numberOfTenants: numberOfTenants,
            numberOfDependents: numberOfDependents,
            ageOfDependents: ageOfDependents,
            comments: comments,
            preferredMethodOfContact: preferredMethodOfContact,
            unit: mongoose.Types.ObjectId(unitID)
        })

        tenant.save((err, savedTenant) => {
            if (err) return utils.error(res, 422, err.message)
            newUser.tenant = savedTenant._id
            newUser.save((err, savedUser) => {
                if (err) return utils.error(res, 422, err.message)
                return res.json({ user: savedUser })
            })
        })
        
        db.Tenant.collection
            .insertOne(newTenant)
            .then(data => res.json({ tenant: data.ops[0] || null }))
            .catch(err => {
                utils.error(res, 422, err.message)
            });
    },

    // Not currently needed
    landlord: function (req, res) {
        const { id } = req.params;
        db.Unit
            .findById(id)
            .select('property')
            .populate({
                path: 'property',
                select: 'landlord',
                populate: {
                    path: 'landlord'
                }
            })
            .then(data => res.json({ landlord: data.property.landlord }))
            .catch(err => utils.error(res, 422, err.message));
    },

    // TODO: Needs testing
    addWorkOrder: function (req, res) {
        // TODO: Check that the landlord/tenant are allowed to add a work order to the given unit
        const { service, unitID, tenantID, landlordID } = req.body;
        var newWorkOrder = {
            service: service,
            unit: unitID,
            tenant: tenantID || null,
            landlord: landlordID || null
        }
        
        db.WorkOrder.collection
            .insertOne(newWorkOrder)
            .then(data => res.json({ workOrder: data.ops[0] || null }))
            .catch(err => {
                utils.error(res, 422, err.message)
            });
    },

};