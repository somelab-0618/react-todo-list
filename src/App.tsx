import React, { useState } from 'react';
import { InputTodo } from './components/InputTodo';
import { TodoListTable } from './components/TodoListTable';
import { Todo, TodoText, TodoState } from './types/todo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoText, setTodoText] = useState<TodoText>('');
  const [TodoState, setTodoState] = useState<TodoState>('all');

  const addTodo: () => void = () => {
    if (!todoText) return;
    const newTodo: Todo = {
      comment: todoText,
      isDone: false,
    };

    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
    setTodoText('');
  };

  const deleteTodo: (index: number) => void = (index) => {
    const newTodoList = [...todos];
    newTodoList.splice(index, 1);
    setTodos(newTodoList);
  };

  const changeTodoState: (index: number) => void = (index) => {
    const newTodoList = [...todos];
    const newTodo = {
      comment: newTodoList[index].comment,
      isDone: !newTodoList[index].isDone,
    };
    newTodoList[index] = newTodo;
    console.log(newTodoList);
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
      <TodoListTable
        todos={todos}
        deleteTodo={deleteTodo}
        changeTodoState={changeTodoState}
      />
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
