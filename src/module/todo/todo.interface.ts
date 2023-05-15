// import { Document } from 'mongoose';
// import { TodoStatus } from './todo.enum';

// export interface ITodo extends Document {
//   readonly title: string;
//   readonly description: string;
//   readonly status: TodoStatus;
// }

import { TodoStatus } from './todo.enum';
export interface ITodoKey {
  id: string;
}

export interface ITodo extends ITodoKey {
  title: string;
  description: string;
  status: TodoStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
