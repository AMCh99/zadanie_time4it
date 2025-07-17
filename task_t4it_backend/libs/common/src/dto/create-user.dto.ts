import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { UserDto } from './user.dto';

export class CreateUserDto extends PartialType(UserDto) {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsEmail()
  email: string;
}