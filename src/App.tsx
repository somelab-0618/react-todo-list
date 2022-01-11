import React, { useState } from 'react';
import { InputTodo } from './components/InputTodo';
import { TodoListTable } from './components/TodoListTable';
import { Todo, TodoText } from './types/todo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoText, setTodoText] = useState<TodoText>('');

  const addTodo: () => void = () => {
    if (!todoText) return;
    const newTodo: Todo = {
      id: todos.length + 1,
      comment: todoText,
      isDone: false,
    };

    const newTodoList: Todo[] = [...todos, newTodo];
    setTodos(newTodoList);
    setTodoText('');
  };

  const deleteTodo: (index: number) => void = (index) => {
    const newTodoList = [...todos];
    newTodoList.splice(index, 1);
    setTodos(newTodoList);
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
      <TodoListTable todos={todos} deleteTodo={deleteTodo} />
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
