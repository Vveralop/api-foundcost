import { Document } from 'mongoose';

export interface Funding extends Document {
  description: string;
  curveset: object;
  result: object;
  createdAt: Date;
}
