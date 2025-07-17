import { Controller, Get } from '@nestjs/common';
import { UsersServiceService } from './users-service.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from '../../../libs/common/src/dto/create-user.dto';
import {
  USERS_CREATE_PATTERN,
  USERS_FIND_ALL_PATTERN,
} from '../../../libs/common/src/patterns';

@Controller()
export class UsersServiceController {
  constructor(private readonly usersServiceService: UsersServiceService) {}

  @MessagePattern(USERS_FIND_ALL_PATTERN)
  findAll() {
    return this.usersServiceService.findAll();
  }

  @MessagePattern(USERS_CREATE_PATTERN)
  create(@Payload() createUserDto: CreateUserDto) {
    return this.usersServiceService.create(createUserDto);
  }
}
