import { Module } from '@nestjs/common';
import { FundingModule } from './modules/funding/funding.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './modules/product/product.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost/fundingofcost'),
    FundingModule,
    ProductModule,
    // MongooseModule.forRoot(
    //   'mongodb://mongoadmin:admin@localhost:27017/fundingofcost',
    //   // `mongodb://${process.env.USERMONGO}:${process.env.PASSMONGO}@${process.env.URIMONGO}/fundingofcost`,
    // ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
