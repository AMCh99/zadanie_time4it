import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskApiGatewayService {
  getHello(): string {
    return 'Hello World!';
  }
}
