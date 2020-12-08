import mongoose from "mongoose";

const schema = mongoose.Schema;

const SalesSchema = new schema({
  cmsName: { type: String, required: true },
  invoiceNo: { type: String, required: true },
  invoiceDate: { type: String, required: true },
  users: {
    desc: { type: String, required: true },
    item: { type: String, required: true },
    qty: { type: String, required: true },
    rate: { type: String, required: true },
    total: { type: String, required: true }
  }
});

const salesModel = mongoose.model("salesModel", SalesSchema, "sales");

export { salesModel };
