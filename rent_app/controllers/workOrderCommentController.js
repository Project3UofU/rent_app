const db = require("../models");
const utils = require('../utils');

module.exports = {

    remove: function (req, res) {
        const { id } = req.body;
        db.WorkOrderComment
            .deleteOne({ _id: id })
            .then(data => res.json({ workOrderComment: data }))
            .catch(err => utils.error(res, 422, err.message));
    }

};