import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const DEV = process.env.NODE_ENV === 'development';
  const LISTEN_ADDRESS = DEV ? 'localhost' : '0.0.0.0';
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  await app.listen(+process.env.PORT, LISTEN_ADDRESS, () => {
    // eslint-disable-next-line no-console
    console.log(
      `\n \x1B[32m➜\x1B[0m Local: \x1B[36mhttp://${LISTEN_ADDRESS}:${process.env.PORT}/${process.env.API_PREFIX}`,
    );
  });
}
bootstrap();
