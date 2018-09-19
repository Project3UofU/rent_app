const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Landlord
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findById: function (req, res) {
        db.Landlord
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: function (req, res) {
        db.Landlord
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    update: function (req, res) {
        db.Landlord
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    remove: function (req, res) {
        db.Landlord
            .deleteOne({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    info: function (id) {
        return db.Landlord.findOne({ _id: id }).populate({
            path: 'properties',
            populate: {
                path: 'units',
                populate: {
                    path: 'tenants',
                    // select: 'created -_id' // Example of how to show `created` and hide `_id`
                }
            }
        })
    },
};
