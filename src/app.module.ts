import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FundingModule } from './modules/funding/funding.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    FundingModule,
    MongooseModule.forRoot('mongodb://localhost/funding'),
    // MongooseModule.forRoot(
    //   'mongodb://mongoadmin:admin@localhost:27017/Fundingcost',
    //   // `mongodb://${process.env.USERMONGO}:${process.env.PASSMONGO}@${process.env.URIMONGO}/Fundingcost`,
    // ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
