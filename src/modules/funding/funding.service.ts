import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Funding } from './interfaces/funding.interface';
import {
  CreateFundingDto,
  FindById,
  UpdateFundingDto,
  FindByCreatedAt,
} from './dto/funding.dto';

@Injectable()
export class FundingService {
  constructor(
    @InjectModel('Funding') private readonly fundingModel: Model<Funding>,
  ) {}

  async getFundingsByCreatedAt(
    dateCreated: FindByCreatedAt,
  ): Promise<Funding[]> {
    const query = {
      date: {
        $gte: dateCreated,
        $lte: dateCreated,
      },
    };
    const funds = await this.fundingModel.find(query);
    return funds;
  }

  async getFundings(): Promise<Funding[]> {
    const funds = await this.fundingModel.find();
    return funds;
  }

  async getFunding(fundId: FindById): Promise<Funding> {
    const fund = await this.fundingModel.findById(fundId);
    return fund;
  }

  async createFunding(createFundingDto: CreateFundingDto): Promise<Funding> {
    const found = new this.fundingModel(createFundingDto);
    return await found.save();
  }

  async deleteFunding(fundId: FindById): Promise<Funding> {
    const fund = await this.fundingModel.findByIdAndDelete(fundId);
    return fund;
  }

  async updateFunding(
    fundId: FindById,
    updateFundingDto: UpdateFundingDto,
  ): Promise<Funding> {
    const fund = await this.fundingModel.findByIdAndUpdate(
      fundId,
      updateFundingDto,
      { new: true },
    );
    return fund;
  }
}
