import { Injectable } from '@nestjs/common';
import pino from 'pino';

@Injectable()
export class NotificationServiceService {
  private readonly logger = pino();
  logNotification(userName: string, userEmail: string) {
    this.logger.info(`📢 New user created: ${userName} (${userEmail})`);
  }
}
