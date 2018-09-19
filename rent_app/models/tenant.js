const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// When `select` is false it means the property won't show up in queries
const tenantSchema = new Schema({
    created: { type: Date, default: Date.now, select: false },
    name: { type: String, required: true },
    password: { type: String, required: true, select: false },
    unit: {
        type: Schema.Types.ObjectId,
        ref: "Unit"
    }
});

const Tenant = mongoose.model("Tenant", tenantSchema);

module.exports = Tenant;
