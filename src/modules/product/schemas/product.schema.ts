import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
  productName: String,
  description: String,
  productType: String,
  status: String,
  userModify: String,
  modifyDate: {
    type: Date,
    default: Date.now,
  },
  options: [
    {
      identifier: String,
      description: String,
      rateType: String,
      structure: String,
      dayCounter: String,
      compounding: String,
      allowPartialDisbursements: Boolean,
      currency: String,
      minNotional: Number,
      maxNotional: Number,
      minStartTenor: String,
      maxStartTenor: String,
      maxEndTenor: String,
      discountCurve: String,
      forecastCurves: Object,
      paymentFrequencies: Object,
    },
  ],
});
