const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// When `select` is false it means the property won't show up in queries
const landlordSchema = new Schema({
  created: { type: Date, default: Date.now, select: false },
  firstName: { type: String, unique: true },
	lastName: { type: String, unique: true },
	email: { type: String, required: false },
	businessPhone: { type: String, required: false },
	cellPhone: { type: String, required: false },
	homePhone: { type: String, required: false },
	fax: { type: String, required: false },
	businessAddress: { type: String, required: false },
	mailingAddress: { type: String, required: false }
}, {
    toJSON: { virtuals: true },
  });

landlordSchema.virtual('properties', {
  ref: 'Property',
  localField: '_id',
  foreignField: 'landlord',
  justOne: false
});


const Landlord = mongoose.model("Landlord", landlordSchema);

module.exports = Landlord;
