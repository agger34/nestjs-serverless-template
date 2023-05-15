import { Injectable } from '@nestjs/common';
import { CreateTodoDto, ResponseTodoDto, UpdateTodoDto } from './todo.dto';
import { TodoStatus } from './todo.enum';
import { InjectModel, Model } from 'nestjs-dynamoose';
import { TODO_SCHEMA_NAME } from './todo.schema';
import { ITodo, ITodoKey } from './todo.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TodoRepository {
  constructor(
    @InjectModel(TODO_SCHEMA_NAME)
    private todoModel: Model<ITodo, ITodoKey>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<ResponseTodoDto> {
    return this.todoModel.create({
      ...createTodoDto,
      id: uuid(),
      status: TodoStatus.TODO,
    });
  }

  async findAll(): Promise<ResponseTodoDto[]> {
    return this.todoModel.scan().exec();
  }

  async findById(id: string): Promise<ResponseTodoDto> {
    return this.todoModel.get({ id });
  }

  async update(
    id: string,
    updateTodoDto: UpdateTodoDto,
  ): Promise<ResponseTodoDto> {
    const { title, description, status } = updateTodoDto;
    return this.todoModel.update({
      id,
      title,
      description,
      status,
    });
  }

  async delete(id: string): Promise<void> {
    return this.todoModel.delete({ id });
  }
}
