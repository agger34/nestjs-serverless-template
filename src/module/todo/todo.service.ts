import { Injectable } from '@nestjs/common';
import { TodoRepository } from './todo.repository';
import { CreateTodoDto, ResponseTodoDto, UpdateTodoDto } from './todo.dto';

@Injectable()
export class TodoService {
  constructor(readonly todoRepository: TodoRepository) {}

  async create(createTodoDto: CreateTodoDto): Promise<ResponseTodoDto> {
    return this.todoRepository.create(createTodoDto);
  }

  async findAll(): Promise<ResponseTodoDto[]> {
    return this.todoRepository.findAll();
  }

  async findById(id: string): Promise<ResponseTodoDto> {
    return this.todoRepository.findById(id);
  }

  async update(
    id: string,
    updateTodoDto: UpdateTodoDto,
  ): Promise<ResponseTodoDto> {
    return this.todoRepository.update(id, { ...updateTodoDto });
  }

  async delete(id: string): Promise<void> {
    return this.todoRepository.delete(id);
  }
}
