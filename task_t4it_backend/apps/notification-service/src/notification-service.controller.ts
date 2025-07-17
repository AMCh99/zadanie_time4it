import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { NotificationServiceService } from './notification-service.service';
import { USER_CREATED_PATTERN } from '../../../libs/common/src/patterns';

@Controller()
export class NotificationServiceController {
  constructor(
    private readonly notificationServiceService: NotificationServiceService,
  ) {}

  @EventPattern(USER_CREATED_PATTERN)
  async handleUserCreated(data: Record<string, unknown>) {
    return this.notificationServiceService.logNotification(
      data['name'] as string,
      data['email'] as string,
    );
  }
}
