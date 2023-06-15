import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Funding extends Document {
  @Prop()
  curveSetName: string;
  @Prop()
  // eslint-disable-next-line @typescript-eslint/ban-types
  curveSetConfig: Object;
  @Prop()
  // eslint-disable-next-line @typescript-eslint/ban-types
  bootstrapResults: Object;
  @Prop()
  createdAt: Date;
  @Prop()
  modifiedAt: Date;
}

export const FundingSchema = SchemaFactory.createForClass(Funding);
