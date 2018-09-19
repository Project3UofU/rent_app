const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// When `select` is false it means the property won't show up in queries
const propertySchema = new Schema({
    created: { type: Date, default: Date.now, select: false },
    name: { type: String, required: true },
    landlord: {
        type: Schema.Types.ObjectId,
        ref: "Landlord"
    }
}, {
        toObject: {
            virtuals: true
        },
        toJSON: {
            virtuals: true
        }
    });

propertySchema.virtual('units', {
    ref: 'Unit',
    localField: '_id',
    foreignField: 'property',
    justOne: false
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
