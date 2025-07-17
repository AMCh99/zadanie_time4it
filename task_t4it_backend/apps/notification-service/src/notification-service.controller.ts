import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { NotificationServiceService } from './notification-service.service';

@Controller()
export class NotificationServiceController {
  constructor(
    private readonly notificationServiceService: NotificationServiceService,
  ) {}

  @EventPattern('user.created')
  async handleUserCreated(data: Record<string, unknown>) {
    return this.notificationServiceService.logNotification(
      data['name'] as string,
      data['email'] as string,
    );
  }
}
