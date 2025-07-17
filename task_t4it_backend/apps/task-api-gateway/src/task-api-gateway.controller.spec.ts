import { Test, TestingModule } from '@nestjs/testing';
import { TaskApiGatewayController } from './task-api-gateway.controller';
import { TaskApiGatewayService } from './task-api-gateway.service';

describe('TaskApiGatewayController', () => {
  let taskApiGatewayController: TaskApiGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TaskApiGatewayController],
      providers: [TaskApiGatewayService],
    }).compile();

    taskApiGatewayController = app.get<TaskApiGatewayController>(TaskApiGatewayController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(taskApiGatewayController.getHello()).toBe('Hello World!');
    });
  });
});
