import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { UserRole } from 'src/shared/enum';

export class SignUpDto {
  @ApiProperty({
    description: 'The username of account.',
    required: true,
  })
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: 'The password of account.',
    required: true,
  })
  @IsNotEmpty()
  password: string;
}

export class SignInDto extends SignUpDto {}

export class ResponseAuthDto {
  @ApiProperty({
    description: 'The accessToken of account.',
  })
  accessToken: string;
}

export class ResponseProfileDto {
  @ApiProperty({
    description: 'The id of account.',
  })
  id: string;

  @ApiProperty({
    description: 'The username of account.',
  })
  username: string;

  @ApiProperty({
    description: 'The roles of account.',
  })
  roles: [UserRole];

  @ApiProperty({
    description: 'The createdAt of account.',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'The updatedAt of account.',
  })
  updatedAt: Date;
}
