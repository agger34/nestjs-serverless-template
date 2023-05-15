import * as dynamoose from 'dynamoose';
import { UserRole } from 'src/shared/enum';

export const USER_SCHEMA_NAME = 'User';
export const USER_TABLE_NAME = 'user';

export const UserSchema = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: Array,
      schema: [String],
      required: true,
      default: [UserRole.USER],
    },
  },
  {
    timestamps: true,
  },
);
