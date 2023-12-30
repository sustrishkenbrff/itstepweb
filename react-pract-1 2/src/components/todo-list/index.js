import React, { useState } from 'react';
import './style.css';
import ToDoItemComponent from './todo-item/index.js';

const ToDoListComponent = () => {
  const [originalTasks, setOriginalTasks] = useState([
    { id: 1, text: 'Task 1', createdAt: new Date() },
  ]);

  const [tasks, setTasks] = useState(originalTasks);
  const [newItemText, setNewItemText] = useState('');
  const [isEditing, setEditing] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    setOriginalTasks(originalTasks.filter((task) => task.id !== taskId));
  };

  const handleAddOrUpdate = () => {
    if (isEditing) {
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === isEditing ? { ...task, text: newItemText } : task))
      );
      setEditing(false);
      setNewItemText('');
    } else {
      if (newItemText.trim() !== '') {
        const newTask = { id: Date.now(), text: newItemText, createdAt: new Date() };
        setTasks((prevTasks) => [...prevTasks, newTask]);
        setOriginalTasks((prevOriginalTasks) => [...prevOriginalTasks, newTask]);
        setNewItemText('');
      }
    }
  };

  const handleSearch = () => {
    const results = tasks.filter((task) =>
      task.text.toLowerCase().includes(searchText.toLowerCase())
    );
    setTasks(results);
  };

  const handleResetSearch = () => {
    setSearchText('');
    setTasks(originalTasks); 
  };

  return (
    <div>
      <div className='todo-input padd'>
        <input
          type="text"
          placeholder="Add item..."
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
        />
        <button type="button" className="add" onClick={handleAddOrUpdate}>
          {isEditing ? 'Update' : 'Add'}
        </button>
        <div id="search">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <span onClick={handleResetSearch}>X</span>
        </div>
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className='todo-list'>
        {tasks.map((task) => (
          <ToDoItemComponent
            key={task.id}
            id={task.id}
            text={task.text}
            createdAt={task.createdAt}
            onDelete={handleDelete}
            onEdit={() => {
              setEditing(task.id);
              setNewItemText(task.text);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoListComponent;
