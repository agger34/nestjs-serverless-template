import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto, ResponseUserDto } from './user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<ResponseUserDto> {
    createUserDto.password = await this.generateHash(createUserDto.password);
    return this.userRepository.create(createUserDto);
  }

  async findOne(username: string): Promise<ResponseUserDto> {
    return this.userRepository.findOne(username);
  }

  async findById(id: string): Promise<ResponseUserDto> {
    return this.userRepository.findById(id);
  }

  async generateHash(password: string): Promise<string> {
    const saltOrRounds = 10;
    return bcrypt.hash(password, saltOrRounds);
  }
}
