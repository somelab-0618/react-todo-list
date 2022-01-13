import React, { VFC } from 'react';
import { Todo } from '../types/todo';

type Props = {
  todos: Todo[];
  deleteTodo: (index: number) => void;
};

export const TodoListTable: VFC<Props> = (props) => {
  const { todos, deleteTodo } = props;

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
                  {todo.isDone ? <button>完了</button> : <button>作業中</button>}
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
