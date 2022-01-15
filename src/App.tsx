import React, { useState } from 'react';
import { InputTodo } from './components/InputTodo';
import { RadioInputTodoState } from './components/RadioInputTodoState';
import { TodoListTable } from './components/TodoListTable';
import { Todo, TodoText, TodoState, TodoStateJp } from './types/todo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoText, setTodoText] = useState<TodoText>('');
  const [showTodoState, setShowTodoState] = useState<TodoState>('all');
  const stateList: TodoStateJp = {
    all: 'すべて',
    wip: '作業中',
    done: '完了',
  };

  const addTodo: () => void = () => {
    if (!todoText) return;
    const newTodo: Todo = {
      comment: todoText,
      state: 'wip',
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

  const changeTodoState: (index: number, state: TodoState) => void = (
    index,
    state
  ) => {
    const newTodoList = [...todos];
    const newTodo: Todo = {
      comment: newTodoList[index].comment,
      state: state === 'wip' ? 'done' : 'wip',
    };

    newTodoList[index] = newTodo;
    setTodos(newTodoList);
  };

  const changeShowTodo: (showTodoState: TodoState) => void = (showTodoState) => {
    setShowTodoState(showTodoState);
  };

  const changeInputText: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <div className='task-state'>
        {(Object.keys(stateList) as (keyof TodoStateJp)[]).map((key) => (
          <RadioInputTodoState
            key={key}
            changeShowTodo={changeShowTodo}
            showTodoState={showTodoState}
            stateKey={key}
          >
            {stateList[key]}
          </RadioInputTodoState>
        ))}
      </div>
      <TodoListTable
        todos={todos}
        deleteTodo={deleteTodo}
        changeTodoState={changeTodoState}
        showTodoState={showTodoState}
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
