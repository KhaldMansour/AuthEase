import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { plainToInstance } from 'class-transformer';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/users/entities/user.entity';

import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { LoginDto } from '../dtos/login.dto';
import { RegisterUserDto } from '../dtos/register-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private jwtService: JwtService,
    private configService: ConfigService
  ) {}
  async register(registerUserDto: RegisterUserDto): Promise<User> {
    try{
      const createdUser = await this.userModel.create(registerUserDto);
      const createdUserObject = createdUser.toObject();
      return plainToInstance(User, createdUserObject);
    }catch (error) {
      if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
        throw new UnauthorizedException('Email already exists');
      }
      throw error;
    }
  }

  async login(data: LoginDto): Promise<{ access_token: string }> {
    const user = await this.userModel.findOne({ email: data.email });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const passwordMatches = await bcrypt.compare(data.password, user.password);

    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { userId: user._id, email: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }

  async validateToken(token: string): Promise<JwtPayload> {
    return await this.jwtService.verifyAsync(token, {
      secret: this.configService.get<string>('JWT_SECRET')
    });
  }
}
