import { Module } from '@nestjs/common';
import { UsersServiceService } from './users-service.service';
import { UsersServiceController } from './users-service.controller';
import { Client, ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'users-service',
          port: 3001,
        },
      },
    ]),
  ],
  providers: [UsersServiceService],
  controllers: [UsersServiceController]
})
export class UsersServiceModule {}
