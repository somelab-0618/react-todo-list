import React, { useState } from 'react';
import { InputTodo } from './components/InputTodo';
import { TodoListTable } from './components/TodoListTable';
import { Todo, TodoText, TodoState } from './types/todo';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([{ comment: 'todo1', state: 'wip' }]);
  const [todoText, setTodoText] = useState<TodoText>('');
  const [showTodoState, setShowTodoState] = useState<TodoState>('all');

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
    console.log(newTodoList);
    setTodos(newTodoList);
  };

  const changeShowTodo: (showTodoState: TodoState) => void = (showTodoState) => {
    const todoList = [...todos];
    let newTodoList: Todo[];
    // if (showTodoState) {
    //   newTodoList = todoList.map((todo) => {
    //     todo.isDone ? (todo.isShow = false) : (todo.isShow = true);
    //     return todo;
    //   });
    // } else if (!showTodoState) {
    //   newTodoList = todoList.map((todo) => {
    //     todo.isDone ? (todo.isShow = true) : (todo.isShow = false);
    //     return todo;
    //   });
    // } else {
    //   newTodoList = todoList.map((todo) => {
    //     todo.isShow = true;
    //     return todo;
    //   });
    // }
    console.log({ showTodoState });
    // setTodos(newTodoList);
    setShowTodoState(showTodoState);
  };

  const changeInputText: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <div className='App'>
      <h1>Todo List</h1>
      <div className='task-state'>
        <input
          type='radio'
          onChange={() => changeShowTodo('all')}
          checked={showTodoState === 'all'}
        />
        すべて
        <input
          type='radio'
          onChange={() => changeShowTodo('wip')}
          checked={showTodoState === 'wip'}
        />
        作業中
        <input
          type='radio'
          onChange={() => changeShowTodo('done')}
          checked={showTodoState === 'done'}
        />
        完了
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
