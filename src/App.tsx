import React, { useState } from 'react';
import { InputTodo } from './components/InputTodo';
import { TodoListTable } from './components/TodoListTable';
import { Todo } from './common/interfaces';

type todoText = string;

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoText, setTodoText] = useState<todoText>('');

  const addTodo: () => void = () => {
    if (todoText === '') return;
    const newTodo: Todo = {
      id: todos.length + 1,
      content: todoText,
      isDone: false,
    };

    const newTodoList: Todo[] = [...todos, newTodo];
    setTodos(newTodoList);
    setTodoText('');
  };

  const changeInputText: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <div className='task-state'>
        <input type='radio' />
        すべて
        <input type='radio' />
        作業中
        <input type='radio' />
        完了
      </div>
      <TodoListTable todos={todos} />
      <h2>新規タスクの追加</h2>
      <InputTodo
        inputText={todoText}
        changeInputText={changeInputText}
        addTodo={addTodo}
      />
    </div>
  );
};

export default App;
