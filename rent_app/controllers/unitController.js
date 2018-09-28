const db = require("../models");
const mongoose = require('mongoose');
const utils = require('../utils');

module.exports = {

    // TODO: Create a user for the tenant
    addTenant: function (req, res) {
        const { name, phone, email, preferredMethodOfContact, password, unitID } = req.body;

            // TODO: Update - Will the Tenant's user have all the same fields?
            // const { username, firstName, lastName, password, email, businessPhone, cellPhone, homePhone, fax, businessAddress, mailingAddress, homeAddress } = req.body
            // Create new user
            // const newUser = new User({
            //     'local.username': utils.uuid(), // Generate a UUID for the tenant's username
            //     'local.password': "password", // Default password till the tenant updates it
            //     firstName: firstName,
            //     lastName: lastName,
            //     email: email,
            //     businessPhone: businessPhone,
            //     cellPhone: cellPhone,
            //     homePhone: homePhone,
            //     fax: fax,
            //     businessAddress: businessAddress,
            //     mailingAddress: mailingAddress,
            //     homeAddress: homeAddress
            // })

            // let tenant = new Tenant({})
            // tenant.save((err, savedTenant) => {
            //     if (err) return utils.error(res, 422, err.message)
            //     newUser.tenant = savedTenant._id
            //     newUser.save((err, savedUser) => {
            //         if (err) return utils.error(res, 422, err.message)
            //         return res.json({ user: savedUser })
            //     })
            // })


        var newTenant = {
            name: name,
            phone: phone,
            email: email,
            token: "", // TODO: Generate token for the tenant so it can be send back down to the client
            preferredMethodOfContact: preferredMethodOfContact,
            unit: mongoose.Types.ObjectId(unitID)
        }

        let returnedTenant = Object.assign({}, newTenant); 
        newTenant.password = password; // TODO: Encrypt the password
        
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
    }

};