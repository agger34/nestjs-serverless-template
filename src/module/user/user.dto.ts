import { UserRole } from '../../shared/enum';
import { IUser } from './user.interface';

export class CreateUserDto implements Partial<IUser> {
  username?: string;
  password?: string;
  roles?: [UserRole];
}

export class ResponseUserDto implements Partial<IUser> {
  id: string;
  username: string;
  password?: string;
  roles?: [UserRole];
  createdAt?: Date;
  updatedAt?: Date;
}
