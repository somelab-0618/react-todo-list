import React from 'react';
import { Todo } from '../common/interfaces';

type Props = {
  todos: Todo[];
};

export const TodoListTable = (props: Props) => {
  const { todos } = props;
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
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.comment}</td>
                <td>
                  {todo.isDone ? <button>完了</button> : <button>作業中</button>}
                </td>
                <td>
                  <button>削除</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
