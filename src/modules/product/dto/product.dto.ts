import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@ApiExtraModels()
class Options {
  @ApiProperty()
  identifier: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  rateType: string;
  @ApiProperty()
  structure: string;
  @ApiProperty()
  dayCounter: string;
  @ApiProperty()
  compounding: string;
  @ApiProperty()
  allowPartialDisbursements: boolean;
  @ApiProperty()
  currency: string;
  @ApiProperty()
  minNotional: number;
  @ApiProperty()
  maxNotional: number;
  @ApiProperty()
  minStartTenor: string;
  @ApiProperty()
  maxStartTenor: string;
  @ApiProperty()
  maxEndTenor: string;
  @ApiProperty()
  discountCurve: string;
  @ApiProperty()
  forecastCurves: Array<string>;
  @ApiProperty()
  paymentFrequencies: Array<string>;
}

export class CreateProductDto {
  @ApiProperty()
  productName: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  productType: string;
  @ApiProperty({
    type: Options,
    isArray: true,
  })
  options: Options[];
}

export class UpdateProductDto {
  @ApiProperty()
  productName: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  productType: string;
  @ApiProperty({ isArray: true })
  @ApiProperty({
    type: Options,
    isArray: true,
  })
  options: Options[];
}

export class ProductById {
  productId: string;
}
