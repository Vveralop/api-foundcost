import { Schema } from 'mongoose';

export const FundingSchema = new Schema({
  curveSetName: String,
  curveSetConfig: Object,
  bootstrapResults: Object,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  modifiedAt: {
    type: Date,
    default: Date.now(),
  },
});
