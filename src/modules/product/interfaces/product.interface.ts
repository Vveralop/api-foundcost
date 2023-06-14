import { Document } from 'mongoose';

export interface Product extends Document {
  productName: string;
  description: string;
  productType: string;
  options: [
    {
      identifier: string;
      description: string;
      rateType: string;
      structure: string;
      dayCounter: string;
      compounding: string;
      allowPartialDisbursements: boolean;
      currency: string;
      minNotional: number;
      maxNotional: number;
      minStartTenor: string;
      maxStartTenor: string;
      maxEndTenor: string;
      discountCurve: string;
      forecastCurves: object;
      paymentFrequencies: object;
    },
  ];
}
