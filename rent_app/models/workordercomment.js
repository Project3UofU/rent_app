const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// When `select` is false it means the property won't show up in queries
const workOrderCommentSchema = new Schema({
    created: { type: Date, default: Date.now },
    text: { type: String, required: true },
    workOrder: {
        type: Schema.Types.ObjectId,
        ref: "WorkOrder",
        required: true
    },
    tenant: {
        type: Schema.Types.ObjectId,
        ref: "Tenant"
    },
    landlord: {
        type: Schema.Types.ObjectId,
        ref: "Landlord"
    }
});

const WorkOrder = mongoose.model("WorkOrderComment", workOrderCommentSchema);

module.exports = WorkOrder;
