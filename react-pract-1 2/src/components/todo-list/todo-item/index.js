import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const ToDoItemComponent = (props) => {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.text || "Text of todo item");
  const date = (props.createdAt || new Date()).toDateString();
  const itemId = props.id || "defaultId";

  const handleDelete = () => {
    if (props.onDelete) {
      props.onDelete(itemId);
    }
  };

  const handleEdit = () => {
    if (!isEditing && props.onEdit) {
      props.onEdit();
      setEditing(true);
    }
  };

  const handleTextChange = (e) => {
    setEditedText(e.target.innerText);
  };

  return (
    <div className='todo-item' id={itemId}>
      <div>
        <input className="form-check-input" type="checkbox" value="option1" />
        <label className="form-check-label" htmlFor="inlineCheckbox1"></label>
        <span
          className={`todo-text ${isEditing ? 'editing' : ''}`}
          contentEditable={isEditing}
          onBlur={() => setEditing(false)}
          onInput={handleTextChange}
        >
          {editedText}
        </span>
      </div>
      <span className="todo-text">{date}</span>
      <span className="span-button" onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </span>
      <span className="span-button" onClick={handleEdit}>
        <FontAwesomeIcon icon={faPen} />
      </span>
    </div>
  );
};

export default ToDoItemComponent;