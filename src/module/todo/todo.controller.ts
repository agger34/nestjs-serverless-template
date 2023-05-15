import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CreateTodoDto, ResponseTodoDto, UpdateTodoDto } from './todo.dto';
import { TodoService } from './todo.service';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from '../../decorator/auth.decorator';
import { UserRole } from '../../shared/enum';
import { RolesGuard } from '../../guard/role.guard';
import { JwtAuthGuard } from '../../guard/jwt-auth.guard';

@ApiTags('todos')
@Controller('todos')
@ApiBearerAuth()
@UseGuards(RolesGuard)
@UseGuards(JwtAuthGuard)
export class TodoController {
  constructor(readonly todoService: TodoService) {}

  @Post()
  @Roles(UserRole.ADMIN)
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: ResponseTodoDto,
  })
  async create(@Body() createTodoDto: CreateTodoDto): Promise<ResponseTodoDto> {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  @Roles(UserRole.USER)
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: [ResponseTodoDto],
  })
  findAll(): Promise<ResponseTodoDto[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  @Roles(UserRole.USER)
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: ResponseTodoDto,
  })
  findById(@Param('id') id: string): Promise<ResponseTodoDto> {
    return this.todoService.findById(id);
  }

  @Put(':id')
  @Roles(UserRole.ADMIN)
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: ResponseTodoDto,
  })
  update(
    @Param('id') id: string,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<ResponseTodoDto> {
    return this.todoService.update(id, updateTodoDto);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  delete(@Param('id') id: string): Promise<void> {
    return this.todoService.delete(id);
  }
}
