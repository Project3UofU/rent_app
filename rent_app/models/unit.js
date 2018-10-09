const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// When `select` is false it means the property won't show up in queries
const unitSchema = new Schema({
    created: { type: Date, default: Date.now, select: false },
    bedrooms: { type: Number, required: true },
    bathroom: { type: Number, required: true },
    comments: { type: String, required: false },
    furnished: { type: Boolean, default: false, required: false },
    name: { type: String, required: true },
    pets: { type: Boolean, default: false, required: false },
    parking: { type: Boolean, default: false, required: false },
    wdHookup: { type: Boolean, default: false, required: false }, // Washer/Dryer hook ups
    rent: { type: Number, required: true },
    securityDeposit: { type: Number, required: true },
    smoking: { type: Boolean, default: false, required: false },
    property: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "Property"
    }
}, {
        toJSON: { virtuals: true },
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
