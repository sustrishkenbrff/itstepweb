import React, { useState } from 'react';
import './style.css';

const ToDoInputComponent = (props) => {
  const [items, setItems] = useState([]);
  const [newItemText, setNewItemText] = useState('');
  const [searchText, setSearchText] = useState('');

  const addItem = () => {
    if (newItemText.trim() !== '') {
      setItems([...items, { text: newItemText, id: Date.now() }]);
      setNewItemText('');
    }
  };

  const handleSearch = () => {
    console.log('Searching for:', searchText);
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className='todo-input'>
      <input
        type="text"
        placeholder="Add item..."
        value={newItemText}
        onChange={(e) => setNewItemText(e.target.value)}
      />
      <button type="button" className="add" onClick={addItem}>
        Add
      </button>
      <button type="button" className="add hide">
        Update
      </button>

      <div id="search">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <span>X</span>
      </div>
      <button type="button" onClick={handleSearch}>
        Search
      </button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button type="button" onClick={() => handleDelete(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoInputComponent;