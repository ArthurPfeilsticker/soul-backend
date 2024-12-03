import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './src/app.module';
import * as serverless from 'serverless-http';

let cachedServer;

const bootstrap = async () => {
  if (!cachedServer) {
    const app = await NestFactory.create(AppModule, new ExpressAdapter());
    await app.init();
    cachedServer = serverless(app.getHttpServer());
  }
  return cachedServer;
};

export const handler = async (event: any, context: any) => {
  const server = await bootstrap();
  return server(event, context);
};
