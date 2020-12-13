import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {

  return (
    
    <header>
    <div className="todo">
      <div className="todo__head">
         <p>MY TODOS</p>
         <h1>What's the plan for today</h1>
      </div>
         <br/>
         <br/>
         <TodoList/>
  
    </div>

    </header>
  );
}

export default App;
