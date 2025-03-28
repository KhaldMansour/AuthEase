import { Injectable, NotFoundException } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>
  ) {}
  async findById(id: string): Promise<User> {   
    const user = await this.userModel.findById(new Types.ObjectId(id));

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
