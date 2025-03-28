import {
  Controller,
  Get,
  Request
} from '@nestjs/common';
import { Request as ExpressRequest } from 'express';
import { ApiBearerAuth } from '@nestjs/swagger';

import { User } from '../entities/user.entity';

@Controller('users')
export class UsersController {
  constructor() {}

  @Get('profile')
  @ApiBearerAuth('JWT')
  async profile(@Request() request: ExpressRequest): Promise<User> {
    return request.user;
  }
}
