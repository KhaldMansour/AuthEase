import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { getModelToken } from '@nestjs/mongoose';
import { Types } from 'mongoose';

import { User } from '../entities/user.entity';

import { UsersService } from './users.service';

const mockUser = {
  _id: new Types.ObjectId('60db69d010f5b2d1a8a5fbd3'),
  name: 'Khaled Mansour',
  email: 'khaldmansour93@gmail.com'
};

describe('UsersService', () => {
  let service: UsersService;
  let userModel: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken(User.name),
          useValue: {
            findById: jest
              .fn()
              .mockResolvedValue({
                _id: 'mock-id',
                firstName: 'Khaled',
                lastName: 'Mansour'
              })
          }
        }
      ]
    }).compile();

    service = module.get<UsersService>(UsersService);
    userModel = module.get(getModelToken(User.name));
  });

  describe('findById', () => {
    it('should return a user if user is found', async () => {
      const mockUserId = new Types.ObjectId('60db69d010f5b2d1a8a5fbd3');
      jest.spyOn(userModel, 'findById').mockResolvedValue(mockUser as any);

      const user = await service.findById(mockUserId.toString());
      
      expect(user).toEqual(mockUser);
    });

    it('should throw NotFoundException if user is not found', async () => {
      const mockUserId = new Types.ObjectId('60db69d010f5b2d1a8a5fbd3');
      jest.spyOn(userModel, 'findById').mockResolvedValue(null);

      await expect(service.findById(mockUserId.toString())).rejects.toThrow(
        NotFoundException
      );
    });
  });
});
