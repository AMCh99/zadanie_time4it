import { Module } from '@nestjs/common';
import { UsersServiceService } from './users-service.service';
import { UsersServiceController } from './users-service.controller';
import { Client, ClientsModule, Transport } from '@nestjs/microservices';
import {
  USERS_SERVICE,
  USERS_SERVICE_PORT,
} from '../../../../libs/common/src/constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: USERS_SERVICE,
        transport: Transport.TCP,
        options: {
          host: 'users-service',
          port: USERS_SERVICE_PORT,
        },
      },
    ]),
  ],
  providers: [UsersServiceService],
  controllers: [UsersServiceController],
})
export class UsersServiceModule {}
