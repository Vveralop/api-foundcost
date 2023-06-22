import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Funding, responseCurve } from './interfaces/funding.interface';
import {
  CreateFundingDto,
  FindById,
  UpdateFundingDto,
  FundResponseCurve,
} from './dto/funding.dto';

@Injectable()
export class FundingService {
  constructor(
    @InjectModel('Funding') private readonly fundingModel: Model<Funding>,
  ) {}

  async getFundingsByCreatedAt(
    dateCreated: Date,
  ): Promise<Funding[]> {
    const funds = await this.fundingModel.find({
      "$expr": {
        "$and": [
          { $eq: [{ $year: "$createdAt" }, { $year: dateCreated }]},
          { $eq: [{ $month: "$createdAt" }, { $month: dateCreated }]},
          { $eq: [{ $dayOfMonth: "$createdAt" }, { $dayOfMonth: dateCreated }]}
        ]
      }
    });
    return funds;
  }

  async getResponseCurve(
    paramsJson: FundResponseCurve
  ): Promise<responseCurve[]> {
    const initialDate: Date = new Date(paramsJson.refDate);
    const funds = await this.fundingModel.find({
      "$expr": {
        "$and": [
          { $eq: [{ $year: "$createdAt" }, { $year: initialDate }]},
          { $eq: [{ $month: "$createdAt" }, { $month: initialDate}]},
          { $eq: [{ $dayOfMonth: "$createdAt" }, { $dayOfMonth: initialDate }]},
          { $eq: ["$curveSetName", paramsJson.curveSetName]},
          //{ $eq: ["$bootstrapResults.curveName", paramsJson.curveName]}
        ]
      }
    });
    if (funds.length > 0) {
      const valor:responseCurve[] = funds[0].bootstrapResults;
      return valor.filter(item => item.curveName === paramsJson.curveName);
    } else {
      return []
    }
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
