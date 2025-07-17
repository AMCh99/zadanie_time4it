import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskApiGatewayService {
  getHello(): string {
    return 'I love TIME4IT :)';
  }
}
