export type TodoState = 'all' | 'wip' | 'done';

export type Todo = {
  comment: string;
  state: TodoState;
};

export type TodoText = string;
