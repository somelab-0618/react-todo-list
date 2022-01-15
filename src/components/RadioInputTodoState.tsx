import { ReactNode, VFC } from 'react';
import { TodoState, TodoStateJp } from '../types/todo';

type Props = {
  changeShowTodo: (state: TodoState) => void;
  showTodoState: TodoState;
  stateKey: keyof TodoStateJp;
  children: ReactNode;
};

export const RadioInputTodoState: VFC<Props> = (props) => {
  const { changeShowTodo, showTodoState, stateKey, children } = props;

  return (
    <>
      <input
        type='radio'
        onChange={() => changeShowTodo(stateKey)}
        checked={showTodoState === stateKey}
      />
      {children}
    </>
  );
};
