// src/components/TodoList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../Slice/FetchSlice';

const FetchTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.example.items);
  const status = useSelector((state) => state.example.status);
  const error = useSelector((state) => state.example.error);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <h1>Todo List</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul> 
    </div>
  );
};

export default FetchTodo;
