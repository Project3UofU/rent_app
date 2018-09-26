const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// When `select` is false it means the property won't show up in queries
const tenantSchema = new Schema({
    created: { type: Date, default: Date.now, select: false },
    preferredMethodOfContact: { type: String, required: true },
    unit: {
        type: Schema.Types.ObjectId,
        ref: "Unit"
    }
});

const Tenant = mongoose.model("Tenant", tenantSchema);

module.exports = Tenant;
