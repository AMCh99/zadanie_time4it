import { IsEmail, IsString, IsNotEmpty, MinLength } from "class-validator";

export class UserDto {
  id: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(3) 
  name: string;

  @IsEmail()
  email: string;
}