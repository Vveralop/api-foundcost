import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const DEV = process.env.NODE_ENV === 'development';
  const LISTEN_ADDRESS = DEV ? 'localhost' : '0.0.0.0';
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  //Swagger Config
  const config = new DocumentBuilder()
    .setTitle('Api services Cost of funds')
    .setDescription(
      'This API allows to serve as endpoints for cost of funds applications.',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(process.env.API_PREFIX, app, document);

  await app.listen(+process.env.PORT, LISTEN_ADDRESS, () => {
    // eslint-disable-next-line no-console
    console.log(
      `\n \x1B[32m➜\x1B[0m Local: \x1B[36mhttp://${LISTEN_ADDRESS}:${process.env.PORT}/${process.env.API_PREFIX}`,
    );
  });
}
bootstrap();
