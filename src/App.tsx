import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="task-state">
        <input type="radio" />すべて
        <input type="radio" />作業中
        <input type="radio" />完了
      </div>
      <table className="task-list">
        <thead>
          <tr>
            <th>ID</th>
            <th>コメント</th>
            <th>状態</th>
          </tr>
        </thead>
      </table>
      <h2>新規タスクの追加</h2>
      <input type="text" />
      <button>追加</button>
    </div>
  );
}

export default App;
