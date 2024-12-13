import React, { useState } from 'react';
import './App.css';
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), text: todo, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <div className="todo-container">
        <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
      </div>
    </div>
  );
}

export default App;
