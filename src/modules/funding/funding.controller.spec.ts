import { Test, TestingModule } from '@nestjs/testing';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { FundingController } from './funding.controller';
import { FundingService } from './funding.service';
import { Connection, connect, Model } from 'mongoose';
import { FundingSchema } from './schemas/funding.schema';
import { getModelToken } from '@nestjs/mongoose';
import { FundDtoStub } from '../../../test/unit/fund/stub/fund.dto.stub';
import { FundAlreadyExists } from '../../../test/unit/fund/stub/fund-already-exists.exception';

describe('FundingController', () => {
  let fundingController: FundingController;
  let mongod: MongoMemoryServer;
  let mongoConnection: Connection;
  let fundingModel: Model<typeof FundingSchema>;

  beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    mongoConnection = (await connect(uri)).connection;
    const fundingModel = mongoConnection.model('Funding', FundingSchema);

    const app: TestingModule = await Test.createTestingModule({
      controllers: [FundingController],
      providers: [
        FundingService,
        { provide: getModelToken('Funding'), useValue: fundingModel },
      ],
    }).compile();
    fundingController = app.get<FundingController>(FundingController);
  });

  afterAll(async () => {
    await mongoConnection.dropDatabase();
    await mongoConnection.close();
    await mongod.stop();
  });

  afterEach(async () => {
    const collections = mongoConnection.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany({});
    }
  });

  describe('postFunding', () => {
    it('should return the saved object', async () => {
      const createdFund = await fundingController.createFunding(FundDtoStub());
      expect(createdFund.code).toBe(201);
    });

    it('should return ArticleAlreadyExists (Bad Request - 400) exception', async () => {
      await new fundingModel(FundDtoStub()).save();
      await expect(
        fundingController.createFunding(FundDtoStub()),
      ).rejects.toThrow(FundAlreadyExists);
    });
  });
});
