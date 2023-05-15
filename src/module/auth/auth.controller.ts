import {
  Body,
  Controller,
  Post,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ResponseAuthDto, SignInDto, SignUpDto } from './auth.dto';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from '../../guard/jwt-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto): Promise<ResponseAuthDto> {
    return this.authService.signUp(signUpDto.username, signUpDto.password);
  }

  @ApiBody({
    type: SignInDto,
  })
  @Post('sign-in')
  @UseGuards(LocalAuthGuard)
  signIn(@Request() req): Promise<ResponseAuthDto> {
    return this.authService.getToken(req.user);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('me')
  getProfile(@Request() req) {
    return this.authService.getProfile(req.user?.sub);
  }
}
