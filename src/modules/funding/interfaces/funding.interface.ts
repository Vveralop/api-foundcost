import { Document } from 'mongoose';

export interface Funding extends Document {
  curveSetName: string;
  curveSetConfig: object;
  bootstrapResults: responseCurve[];
  createdAt: Date;
  updatedAt: Date;
}

export interface responseCurve {
  curveName: string;
  nodes: nodes[];
}

export interface nodes {
  date: Date;
  value: Number;
}