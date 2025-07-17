import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices/client/client-proxy';

@Injectable()
export class UsersServiceService {
    constructor(@Inject('USERS_SERVICE') private readonly usersClient: ClientProxy) {}

    findAll() {
        return this.usersClient.send<string>('users.findAll', {});
    }
}
