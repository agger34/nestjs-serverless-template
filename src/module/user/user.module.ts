import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { USER_SCHEMA_NAME, USER_TABLE_NAME, UserSchema } from './user.schema';
import { DynamooseModule } from 'nestjs-dynamoose';

@Module({
  imports: [
    DynamooseModule.forFeature([
      {
        name: USER_SCHEMA_NAME,
        schema: UserSchema,
        options: {
          tableName: USER_TABLE_NAME,
        },
      },
    ]),
  ],
  providers: [UserRepository, UserService, UserRepository],
  exports: [UserService, UserRepository],
})
export class UserModule {}
