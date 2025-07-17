import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices/client/client-proxy';
import { CreateUserDto } from '../../../../libs/common/src/dto/create-user.dto';
import { USERS_FIND_ALL_PATTERN } from '../../../../libs/common/src/patterns';
import { USERS_SERVICE } from '@app/common/constants';

@Injectable()
export class UsersServiceService {
  constructor(
    @Inject(USERS_SERVICE) private readonly usersClient: ClientProxy,
  ) {}

  findAll() {
    return this.usersClient.send<string>(USERS_FIND_ALL_PATTERN, {});
  }

  create(createUserDto: CreateUserDto) {
    return this.usersClient.send<string>('users.create', createUserDto);
  }
}
