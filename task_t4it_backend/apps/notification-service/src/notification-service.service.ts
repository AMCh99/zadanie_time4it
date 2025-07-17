import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationServiceService {
  logNotification(userName: string, userEmail: string) {
    return console.log(
      `:loudspeaker: New user created: ${userName} (${userEmail})`,
    );
  }
}
