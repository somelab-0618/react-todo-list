export type TodoState = 'all' | 'wip' | 'done';

export type TodoStateJp = {
  [key in TodoState]: 'すべて' | '作業中' | '完了';
}

export type Todo = {
  comment: string;
  state: TodoState;
};

export type TodoText = string;
