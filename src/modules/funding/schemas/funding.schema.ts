import { Schema } from 'mongoose';

export const FundingSchema = new Schema({
  description: String,
  curveset: Object,
  result: Object,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
