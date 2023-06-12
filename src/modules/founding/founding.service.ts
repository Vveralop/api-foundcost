import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Founding } from './interfaces/founding.interface';
import { CreateFoundingDto } from './dto/founding.dto';

@Injectable()
export class FoundingService {
  constructor(
    @InjectModel('Founding') private readonly foundingModel: Model<Founding>,
  ) {}

  async getFoundings(): Promise<Founding[]> {
    const founds = await this.foundingModel.find();
    return founds;
  }

  async getFounding(foundId: string): Promise<Founding> {
    const found = await this.foundingModel.findById(foundId);
    return found;
  }

  async createFounding(
    createFoundingDto: CreateFoundingDto,
  ): Promise<Founding> {
    const found = new this.foundingModel(createFoundingDto);
    return await found.save();
  }

  async deleteFounding(foundId: string): Promise<Founding> {
    const found = await this.foundingModel.findByIdAndDelete(foundId);
    return found;
  }

  async updateFounding(
    foundId: string,
    createFoundingDto: CreateFoundingDto,
  ): Promise<Founding> {
    const found = await this.foundingModel.findByIdAndUpdate(
      foundId,
      createFoundingDto,
      { new: true },
    );
    return found;
  }
}
