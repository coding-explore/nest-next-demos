import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
import { ServerModule } from './server.module';

async function bootstrap() {
  const app = await NestFactory.create(ServerModule);
  await app.listen(3000);
}
bootstrap();
