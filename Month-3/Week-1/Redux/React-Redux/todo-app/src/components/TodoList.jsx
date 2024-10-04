import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo, deleteTodo } from '../todos/TodoSlice';

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.tasks);
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditTitle(todo.title);
  };

  const handleSave = () => {
    if (editTitle.trim() !== '') {
      dispatch(editTodo({ id: editId, title: editTitle }));
      setEditId(null);
      setEditTitle('');
    }
  };

  return (
    <div style={{ marginTop: '60px' }}>
      {todos.map((todo) => (
        <div key={todo.id}>
          {editId === todo.id ? (
            <div>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setEditId(null)}>Cancel</button>
            </div>
          ) : (
            <div>
              <input type="text" value={todo.title} disabled />
              <button onClick={() => handleEdit(todo)}>Edit</button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
