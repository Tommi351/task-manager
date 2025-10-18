import { useState } from "react";
import { useDispatch } from "react-redux";
import {deleteTask, updateTask} from '../features/tasks/taskSlice'

const TaskItem = ({task}) => {
  const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(task.title || "");
    const [editDescription, setEditDescription] = useState(task.description || "");
    const [editStatus, setEditStatus] = useState(task.status || "");
   const dispatch = useDispatch();

   return (
    isEditing ? (
    <>
    <input placeholder="Title" value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/>
    <textarea placeholder="Description" value={editDescription} onChange={(e) => setEditDescription(e.target.value)}></textarea>
    <input placeholder="Status" value={editStatus} onChange={(e) => setEditStatus(e.target.value)}/>
    <button className="btn btn-block" onClick={() => { 
     dispatch(updateTask({
      id: task._id, 
      taskData: { 
        title: editTitle, 
        description: editDescription, 
        status: editStatus 
      }
      }));
     setIsEditing(false);
     }}>Save</button>
    </>
    ) : (
    <div className="goal">
      <div>
        {new Date(task.createdAt).toLocaleString('en-US')}
      </div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>{task.status}</p>
      <button className="btn btn-block" onClick={() => {
        setIsEditing(true)
        }}>
        Update
      </button>
      <button onClick={() => dispatch(deleteTask(task._id))} className="btn btn-block close">
        Delete
      </button>
    </div>
    )
   );
};

export default TaskItem