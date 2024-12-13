import React from 'react';

function TodoList({ todos, deleteTodo, toggleComplete }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} className="todo-item">
          <span className="todo-text" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <div className="todo-actions">
            <button className="complete" onClick={() => toggleComplete(todo.id)}>
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
