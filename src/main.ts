import { NestFactory } from '@nestjs/core';
import { SecurePasswordModule } from './module/securePassword.module';

async function bootstrap() {
  const app = await NestFactory.create(SecurePasswordModule);
  await app.listen(3000);
}
bootstrap();
