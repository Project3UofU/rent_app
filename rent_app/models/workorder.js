const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// When `select` is false it means the property won't show up in queries
const workOrderSchema = new Schema({
    created: { type: Date, default: Date.now },
    service: { type: String, required: true },
    read: { type: Boolean, default: false },
    unit: {
        type: Schema.Types.ObjectId,
        ref: "Unit"
    },
    tenant: {
        type: Schema.Types.ObjectId,
        ref: "Tenant"
    },
    landlord: {
        type: Schema.Types.ObjectId,
        ref: "Landlord"
    }
}, {
    toJSON: { virtuals: true },
});

workOrderSchema.virtual('comments', {
    ref: 'WorkOrderComment',
    localField: '_id',
    foreignField: 'workOrder',
    justOne: false
});

const WorkOrder = mongoose.model("WorkOrder", workOrderSchema);

module.exports = WorkOrder;
