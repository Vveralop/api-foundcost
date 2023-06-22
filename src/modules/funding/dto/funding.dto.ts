import { ApiProperty } from '@nestjs/swagger';

export class CreateFundingDto {
  @ApiProperty()
  curveSetName: string;
  @ApiProperty()
  curveSetConfig: object;
  @ApiProperty()
  bootstrapResults: object;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}

export class UpdateFundingDto {
  @ApiProperty()
  curveSetName: string;
  @ApiProperty()
  curveSetConfig: object;
  @ApiProperty()
  bootstrapResults: object;
  @ApiProperty()
  updatedAt: Date;
}

export class FindById {
  fundId: string;
}

export class FindByCreatedAt {
  createdAt: Date;
}

export class FundResponseCurve {
  refDate: Date;
  curveSetName: string;
  curveName: string;
}