import { Test, TestingModule } from '@nestjs/testing';
import { MongoMemoryServer } from "mongodb-memory-server";
import { FundingController } from './funding.controller';
import { FundingService } from './funding.service';
import { Connection, connect, Model } from "mongoose";
import { getModelToken } from "@nestjs/mongoose";

import { Article, ArticleSchema } from "./article.schema";

describe('AppController', () => {
  let fundingController: FundingController;
  let mongod: MongoMemoryServer;
  let mongoConnection: Connection;
  let articleModel: Model<Article>;

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FundingController],
      providers: [FundingService],
    }).compile();
    fundingController = app.get<FundingController>(FundingController);
  });
});
