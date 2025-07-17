import { NestFactory } from '@nestjs/core';
import { TaskApiGatewayModule } from './task-api-gateway.module';
import { API_GATEWAY_PORT } from '../../../libs/common/src/constants';

async function bootstrap() {
  const app = await NestFactory.create(TaskApiGatewayModule);
  await app.listen(process.env.port ?? API_GATEWAY_PORT);
}
bootstrap();
