export type Todo = {
  comment: string;
  isDone: boolean;
};

export type TodoText = string;

export type TodoState = 'all' | 'wip' | 'done';