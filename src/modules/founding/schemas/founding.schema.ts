import { Schema } from 'mongoose';

export const FoundingSchema = new Schema({
  description:String,
  curveset: Object,
  result: Object,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
