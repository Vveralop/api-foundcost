export class CreateFundingDto {
  curveSetName: string;
  curveSetConfig: object;
  bootstrapResults: object;
  createdAt: Date;
  updatedAt: Date;
}

export class UpdateFundingDto {
  curveSetName: string;
  curveSetConfig: object;
  bootstrapResults: object;
  updatedAt: Date;
}

export class FindById {
  fundId: string;
}
