import { CreateUserDto, ResponseUserDto } from './user.dto';
import { v4 as uuid } from 'uuid';
import { IUserKey, IUser } from './user.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { USER_SCHEMA_NAME } from './user.schema';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(USER_SCHEMA_NAME)
    private userModel: Model<IUser, IUserKey>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<ResponseUserDto> {
    const { roles, username, password } = createUserDto;
    const user = await this.userModel.create({
      id: uuid(),
      username,
      password,
      roles: roles,
    });
    return user;
  }

  async findAll(): Promise<ResponseUserDto[]> {
    return this.userModel.scan().exec();
  }

  async findById(id: string): Promise<ResponseUserDto> {
    return this.userModel.get({ id });
  }

  async findOne(username: string): Promise<ResponseUserDto> {
    const users = await this.userModel.scan({ username }).exec();
    if (users.length > 0) {
      return users[0];
    }
    return null;
  }
}
