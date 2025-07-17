import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NotificationServiceModule } from './notification-service.module';
import { KAFKA_BROKER } from '@app/common/constants';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    NotificationServiceModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: [KAFKA_BROKER],
        },
        consumer: {
          groupId: 'notification-consumer',
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
