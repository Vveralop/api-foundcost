import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Funding } from './interfaces/funding.interface';
import {
  CreateFundingDto,
  FindById,
  UpdateFundingDto,
} from './dto/funding.dto';

@Injectable()
export class FundingService {
  constructor(
    @InjectModel('Funding') private readonly fundingModel: Model<Funding>,
  ) {}

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
    foundId: FindById,
    updateFundingDto: UpdateFundingDto,
  ): Promise<Funding> {
    const fund = await this.fundingModel.findByIdAndUpdate(
      foundId,
      updateFundingDto,
      { new: true },
    );
    return fund;
  }
}
