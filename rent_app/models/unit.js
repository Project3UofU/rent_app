const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// When `select` is false it means the property won't show up in queries
const unitSchema = new Schema({
    created: { type: Date, default: Date.now, select: false },
    rent: { type: Number },
    securityDeposit: { type: Number },
    name: { type: String, required: true },
    property: {
        type: Schema.Types.ObjectId,
        ref: "Property"
    }
}, {
        toObject: {
            virtuals: true
        },
        toJSON: {
            virtuals: true
        }
    });

unitSchema.virtual('tenants', {
    ref: 'Tenant',
    localField: '_id',
    foreignField: 'unit',
    justOne: false
});

unitSchema.virtual('workOrders', {
    ref: 'WorkOrder',
    localField: '_id',
    foreignField: 'unit',
    justOne: false
});

const Unit = mongoose.model("Unit", unitSchema);

module.exports = Unit;
