import { VFC } from 'react';
import { Todo, TodoState } from '../types/todo';

type Props = {
  todos: Todo[];
  deleteTodo: (index: number) => void;
  changeTodoState: (index: number, state: TodoState) => void;
  showTodoState: TodoState;
};

export const TodoListTable: VFC<Props> = (props) => {
  const { todos, deleteTodo, changeTodoState, showTodoState } = props;

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
            if (showTodoState === 'all' || showTodoState === todo.state) {
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{todo.comment}</td>
                  <td>
                    <button onClick={() => changeTodoState(index, todo.state)}>
                      {todo.state === 'wip' ? '作業中' : '完了'}
                    </button>
                  </td>
                  <td>
                    <button onClick={() => deleteTodo(index)}>削除</button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </>
  );
};
