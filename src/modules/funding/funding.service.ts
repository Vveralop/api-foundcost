import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Funding } from './interfaces/funding.interface';
import { CreateFundingDto } from './dto/funding.dto';

@Injectable()
export class FundingService {
  constructor(
    @InjectModel('Funding') private readonly fundingModel: Model<Funding>,
  ) {}

  async getFundings(): Promise<Funding[]> {
    const founds = await this.fundingModel.find();
    return founds;
  }

  async getFunding(fundId: string): Promise<Funding> {
    const found = await this.fundingModel.findById(fundId);
    return found;
  }

  async createFunding(createFundingDto: CreateFundingDto): Promise<Funding> {
    const found = new this.fundingModel(createFundingDto);
    return await found.save();
  }

  async deleteFunding(fundId: string): Promise<Funding> {
    const found = await this.fundingModel.findByIdAndDelete(fundId);
    return found;
  }

  async updateFunding(
    foundId: string,
    createFundingDto: CreateFundingDto,
  ): Promise<Funding> {
    const found = await this.fundingModel.findByIdAndUpdate(
      foundId,
      createFundingDto,
      { new: true },
    );
    return found;
  }
}
