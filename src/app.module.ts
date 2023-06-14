import { Module } from '@nestjs/common';
import { FundingModule } from './modules/funding/funding.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/foundingcost'),
    FundingModule,
    ProductModule,
    // MongooseModule.forRoot(
    //   'mongodb://mongoadmin:admin@localhost:27017/foundingcost',
    //   // `mongodb://${process.env.USERMONGO}:${process.env.PASSMONGO}@${process.env.URIMONGO}/foundingcost`,
    // ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
