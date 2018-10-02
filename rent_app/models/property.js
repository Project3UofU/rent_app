const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// When `select` is false it means the property won't show up in queries
const propertySchema = new Schema({
    created: { type: Date, default: Date.now, select: false },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    comments: { type: String, required: true },
    nickname: { type: String, required: false },
    landlord: {
        required: true
        type: Schema.Types.ObjectId,
        ref: "Landlord"
    }
}, {
        toJSON: { virtuals: true },
    });

propertySchema.virtual('units', {
    ref: 'Unit',
    localField: '_id',
    foreignField: 'property',
    justOne: false
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
