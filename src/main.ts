import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express'

const server = express();

export const handler = async (event: any, context: any) => {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  await app.init();
  return server(event, context);
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'https://soul-backend.vercel.app',
  });
  // Configurar limite para 30 MB
  app.use(bodyParser.json({ limit: '30mb' }));
  app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

  await app.listen(3000);
}
bootstrap();
