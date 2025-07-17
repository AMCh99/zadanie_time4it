import { Module } from '@nestjs/common';
import { TaskApiGatewayController } from './task-api-gateway.controller';
import { TaskApiGatewayService } from './task-api-gateway.service';
import { UsersServiceModule } from './users-service/users-service.module';

@Module({
  imports: [UsersServiceModule],
  controllers: [TaskApiGatewayController],
  providers: [TaskApiGatewayService],
})
export class TaskApiGatewayModule {}
