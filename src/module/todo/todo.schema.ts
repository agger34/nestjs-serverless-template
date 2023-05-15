import * as dynamoose from 'dynamoose';

export const TODO_SCHEMA_NAME = 'Todo';
export const TODO_TABLE_NAME = 'todo';

export const TodoSchema = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
