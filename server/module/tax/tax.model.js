import mongoose from "mongoose";

const schema = mongoose.Schema;

const taxSchema = new schema({
  taxName: { type: String, required: true },
  taxRate: { type: String, required: true },
  taxType: { type: String, required: true }
});

const taxModel = mongoose.model("taxModel", taxSchema, "tax");

export { taxModel };
