import React, { useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id:1,
      text:'todo1',
      checked: true,
    },
    {
      id: 2,
      text: 'todo2',
      checked: true,
    },
    {
      id: 3,
      text: 'todo3',
      checked: false,
    }
  ]);
  
  return (
    <TodoTemplate>
      <TodoInsert/>
      <TodoList todos={todos}/>
    </TodoTemplate>
  ); 
};

export default App;