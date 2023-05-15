import { UserRole } from 'src/shared/enum';

export interface IUserKey {
  id: string;
}

export interface IUser extends IUserKey {
  username: string;
  password: string;
  roles: [UserRole];
}
