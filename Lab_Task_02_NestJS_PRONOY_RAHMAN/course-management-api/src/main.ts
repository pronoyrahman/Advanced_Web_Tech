import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove fields not in the DTO
      forbidNonWhitelisted: true, // throw an error for unknown fields
      transform: true, // auto-convert types (e.g. string to number)
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();