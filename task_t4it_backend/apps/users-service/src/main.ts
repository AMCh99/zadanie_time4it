import { NestFactory } from '@nestjs/core';
import { UsersServiceModule } from './users-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { USERS_SERVICE_PORT } from '../../../libs/common/src/constants';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UsersServiceModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: USERS_SERVICE_PORT,
      },
    },
  );
  await app.listen();
}
bootstrap();
