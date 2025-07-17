import { Controller, Get } from '@nestjs/common';
import { TaskApiGatewayService } from './task-api-gateway.service';

@Controller()
export class TaskApiGatewayController {
  constructor(private readonly taskApiGatewayService: TaskApiGatewayService) {}

  @Get()
  getHello(): string {
    return this.taskApiGatewayService.getHello();
  }
}
