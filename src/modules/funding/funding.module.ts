import { Module } from '@nestjs/common';
import { FundingController } from './funding.controller';
import { FundingService } from './funding.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FundingSchema } from './schemas/funding.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Funding', schema: FundingSchema }]),
  ],
  controllers: [FundingController],
  providers: [FundingService],
})
export class FundingModule {}
