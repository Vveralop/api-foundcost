import { MockModel } from '../../database/mock.model';
import { FundingSchema } from '../../../../src/modules/funding/schemas/funding.schema';
import { fundStub } from './fund.stub';

export class FundModel extends MockModel<typeof FundingSchema> {
  protected fundStub = fundStub();
}
