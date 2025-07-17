import { NestFactory } from '@nestjs/core';
import { TaskApiGatewayModule } from './task-api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(TaskApiGatewayModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
