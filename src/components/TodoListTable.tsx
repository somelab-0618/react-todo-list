import React, { VFC } from 'react';
import { Todo } from '../types/todo';

type Props = {
  todos: Todo[];
  deleteTodo: (index: number) => void;
  changeTodoState: (index: number) => void;
};

export const TodoListTable: VFC<Props> = (props) => {
  const { todos, deleteTodo, changeTodoState } = props;

  return (
    <>
      <table className='task-list'>
        <thead>
          <tr>
            <th>ID</th>
            <th>コメント</th>
            <th>状態</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo: Todo, index: number) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{todo.comment}</td>
                <td>
                  {todo.isDone ? (
                    <button onClick={() => changeTodoState(index)}>完了</button>
                  ) : (
                    <button onClick={() => changeTodoState(index)}>作業中</button>
                  )}
                </td>
                <td>
                  <button onClick={() => deleteTodo(index)}>削除</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
