import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersServiceService } from './users-service.service';
import { CreateUserDto } from '../../../../libs/common/src/dto/create-user.dto';

@Controller('users')
export class UsersServiceController {
  constructor(private readonly usersService: UsersServiceService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
