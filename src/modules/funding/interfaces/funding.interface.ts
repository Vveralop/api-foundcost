import { Document } from 'mongoose';

export interface Funding extends Document {
  curveSetName: string;
  curveSetConfig: object;
  bootstrapResults: object;
  createdAt: Date;
  updatedAt: Date;
}
