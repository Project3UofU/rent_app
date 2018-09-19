const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// When `select` is false it means the property won't show up in queries
const landlordSchema = new Schema({
  created: { type: Date, default: Date.now, select: false },
  username: { type: String, required: true },
  password: { type: String, required: true, select: false },
}, {
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  });

landlordSchema.virtual('properties', {
  ref: 'Property',
  localField: '_id',
  foreignField: 'landlord',
  justOne: false
});


const Landlord = mongoose.model("Landlord", landlordSchema);

module.exports = Landlord;
