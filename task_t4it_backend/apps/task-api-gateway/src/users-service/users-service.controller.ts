import { Controller, Get } from '@nestjs/common';
import { UsersServiceService } from './users-service.service';

@Controller('users')
export class UsersServiceController {
    constructor(private readonly usersService: UsersServiceService) {}

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

}
