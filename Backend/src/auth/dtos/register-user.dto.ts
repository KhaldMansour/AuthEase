import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength, IsNotEmpty, Matches } from 'class-validator';

export class RegisterUserDto {
  @ApiProperty({
    description: 'The first name of the user',
    example: 'John'
  })
  @IsString()
  @IsNotEmpty()
    firstName: string;

  @ApiProperty({
    description: 'The last name of the user',
    example: 'Doe'
  })
  @IsString()
    lastName: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'user@example.com'
  })
  @IsEmail()
    email: string;

  @ApiProperty({
    description: 'The password of the user (at least 6 characters)',
    example: 'strongpassword123'
  })
  
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @Matches(/[A-Za-z]/, { message: 'Password must contain at least one letter' })
  @Matches(/[0-9]/, { message: 'Password must contain at least one number' })
  @Matches(/[@$!%*?&]/, { message: 'Password must contain at least one special character' })
    password: string;
}
