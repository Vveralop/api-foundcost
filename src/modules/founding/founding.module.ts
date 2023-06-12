import { Module } from '@nestjs/common';
import { FoundingController } from './founding.controller';
import { FoundingService } from './founding.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FoundingSchema } from './schemas/founding.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Founding', schema: FoundingSchema }]),
  ],
  controllers: [FoundingController],
  providers: [FoundingService],
})
export class FoundingModule {}
