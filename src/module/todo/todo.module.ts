import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { TodoRepository } from './todo.repository';
import { DynamooseModule } from 'nestjs-dynamoose';
import { TODO_SCHEMA_NAME, TODO_TABLE_NAME, TodoSchema } from './todo.schema';

@Module({
  imports: [
    DynamooseModule.forFeature([
      {
        name: TODO_SCHEMA_NAME,
        schema: TodoSchema,
        options: {
          tableName: TODO_TABLE_NAME,
        },
      },
    ]),
  ],
  controllers: [TodoController],
  providers: [TodoRepository, TodoService],
})
export class TodoModule {}
