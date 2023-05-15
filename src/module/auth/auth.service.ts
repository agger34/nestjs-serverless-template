import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ResponseAuthDto, ResponseProfileDto } from './auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger();
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signUp(username: string, password: string): Promise<ResponseAuthDto> {
    const user = await this.usersService.findOne(username);
    if (user) {
      throw new BadRequestException("Username's exist.");
    }

    try {
      const createdUser = await this.usersService.create({
        username: username,
        password: password,
      });

      const payload = {
        username: createdUser.username,
        sub: createdUser.id,
        roles: createdUser.roles,
      };
      return {
        accessToken: await this.jwtService.signAsync(payload),
      } as ResponseAuthDto;
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException();
    }
  }

  // async signIn(username: string, password: string): Promise<ResponseAuthDto> {
  //   const user = await this.usersService.findOne(username);
  //   const isMatchPassword = await bcrypt.compare(password, user?.password);
  //   if (!isMatchPassword) {
  //     throw new UnauthorizedException();
  //   }
  //   const payload = {
  //     username: user.username,
  //     sub: user.id,
  //     roles: user.roles,
  //   };
  //   return {
  //     accessToken: await this.jwtService.signAsync(payload),
  //   } as ResponseAuthDto;
  // }

  async getProfile(id: string): Promise<ResponseProfileDto> {
    const user = await this.usersService.findById(id);
    return {
      id: user.id,
      username: user.username,
      roles: user.roles,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  async getToken({ username, sub, roles }): Promise<ResponseAuthDto> {
    const payload = {
      username,
      sub,
      roles,
    };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    } as ResponseAuthDto;
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    const isMatchPassword = await bcrypt.compare(
      password,
      user?.password || '',
    );
    if (isMatchPassword) {
      const payload = {
        username: user.username,
        sub: user.id,
        roles: user.roles,
      };
      return payload;
    }
    return null;
  }
}
