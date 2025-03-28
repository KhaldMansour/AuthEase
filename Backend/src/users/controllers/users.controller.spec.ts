import { Test, TestingModule } from '@nestjs/testing';
import { Request as ExpressRequest } from 'express';
import { Types } from 'mongoose';

import { User } from '../entities/user.entity';

import { UsersController } from './users.controller';

const mockUser: User = {
  _id: new Types.ObjectId('60db69d010f5b2d1a8a5fbd3'),
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  password: 'hashed-password'
};

describe('UsersController', () => {
  let usersController: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: []
    }).compile();

    usersController = module.get<UsersController>(UsersController);
  });

  describe('profile', () => {
    it('should return the profile of the currently authenticated user', async () => {
      const mockRequest = {
        user: mockUser 
      } as ExpressRequest;

      const result = await usersController.profile(mockRequest); 

      expect(result).toEqual(mockUser); 
    });
  });
});
