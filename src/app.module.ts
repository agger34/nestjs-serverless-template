import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TodoModule } from './module/todo/todo.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './module/auth/auth.module';
import { UserModule } from './module/user/user.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { DynamooseModule } from 'nestjs-dynamoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TodoModule,
    AuthModule,
    UserModule,
    DynamooseModule.forRoot({
      local: process.env.DYNAMODB_ENDPOINT,
    }),
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
