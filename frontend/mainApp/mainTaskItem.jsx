import React from 'react'
import { useState } from 'react';
const TaskItem = ({_id, title, description, status, onEditTask, onDeleteTask}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);
  const [editStatus, setEditStatus] = useState(status);
   return (
    isEditing ? (
    <>
    <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/>
    <textarea value={editDescription} onChange={(e) => setEditDescription(e.target.value)}></textarea>
    <input value={editStatus} onChange={(e) => setEditStatus(e.target.value)}/>
    <button onClick={() => { onEditTask({ _id, title: editTitle, description: editDescription, status: editStatus });
     setIsEditing(false);
     }}>Save</button>
    </>
   ) : (
    <li className='Task-Item'>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{status}</p>
      </div>
      <div className="task-buttons">
        <button onClick={() => setIsEditing(true)}>Update</button>
        <button onClick={() => onDeleteTask({id: _id})}>Delete</button>
      </div>
    </li>
  )
);
};

export default TaskItem