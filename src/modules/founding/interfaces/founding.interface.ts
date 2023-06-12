import { Document } from 'mongoose';

export interface Founding extends Document {
  description: string;
  curveset: object;
  result: object;
  createdAt: Date;
}
