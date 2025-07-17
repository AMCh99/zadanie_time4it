import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersServiceService {
  private users: UserDto[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
  ];

  findAll(): UserDto[] {
    return this.users;
  }

  create(createUserDto: CreateUserDto): UserDto {
    const newUser: UserDto = {
      ...createUserDto,
      id: this.users.length + 1,
    };
    this.users.push(newUser);
    return newUser;
  }
}