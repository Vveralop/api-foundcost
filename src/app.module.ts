import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoundingModule } from './modules/founding/founding.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    FoundingModule,
    MongooseModule.forRoot('mongodb://localhost/foundingcost'),
    // MongooseModule.forRoot(
    //   'mongodb://mongoadmin:admin@localhost:27017/foundingcost',
    //   // `mongodb://${process.env.USERMONGO}:${process.env.PASSMONGO}@${process.env.URIMONGO}/foundingcost`,
    // ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
