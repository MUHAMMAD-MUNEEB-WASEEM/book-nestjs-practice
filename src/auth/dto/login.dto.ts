import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString({ message: 'Please enter correct email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
