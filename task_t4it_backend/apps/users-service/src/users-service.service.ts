import { Injectable, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { NOTIFICATION_SERVICE } from '../../../libs/common/src/constants';

@Injectable()
export class UsersServiceService {
  private users: UserDto[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  ];

  constructor(
    @Inject(NOTIFICATION_SERVICE) private readonly client: ClientKafka,
  ) {}

  async onModuleInit() {
    this.client.subscribeToResponseOf('user.created');
    await this.client.connect();
  }

  findAll(): UserDto[] {
    return this.users;
  }

  create(createUserDto: CreateUserDto): UserDto {
    const newUser: UserDto = {
      ...createUserDto,
      id: this.users.length + 1,
    };
    this.users.push(newUser);
    this.client.emit('user.created', {
      name: newUser.name,
      email: newUser.email,
    });
    return newUser;
  }
}