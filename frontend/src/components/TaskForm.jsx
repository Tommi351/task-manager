import { useState, useEffect } from "react"
import {useSelector, useDispatch} from 'react-redux'
import {createTask} from '../features/tasks/taskSlice'

const TaskForm = () => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('')

  const dispatch = useDispatch()


  const onSubmit = (e) => {
   e.preventDefault();

   dispatch(createTask({title, description, status}));
   setDescription('')
   setTitle('')
   setStatus('')
  }

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
         <div className="form-group">
          <label htmlFor="title">Title</label>
          <input 
            type="text" 
            name="title" 
            id="title" 
            placeholder="Enter a title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        </div>
         <div className="form-group">
          <label htmlFor="description">Description</label>
          <input 
            type="text" 
            name="description" 
            id="description"
            placeholder="Describe your task" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <input 
            type="text" 
            name="status" 
            id="status"
            placeholder="Describe your task" 
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            />
        </div>
        <div className="form-group">
          <button className="btn btn-block"
          type="submit">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
export default TaskForm