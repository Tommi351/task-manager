import { useEffect, useState } from 'react'
import axios from 'axios';
import '../app.css'
import TaskList from '../components/TaskList.jsx'
import TaskForm from '../components/TaskForm.jsx';

const mainApp = () => {
  const [tasks, setTasks] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fetchTasks = async () => {
      try {
      const {data} = await axios.get('http://localhost:5000/tasks');
      if (!data) {
        console.log('Failed to fetch tasks', err);
        return;
      }
      setTasks(data)
      } catch (err) {
        console.log('Tasks not found', err);
      }
     }
     fetchTasks();
     }, []);
    
      
    const onAddTask = async (newTask) => {
      try {
        const {data} = await axios.post('http://localhost:5000/tasks', newTask);
     if (!data) {
      console.log('Failed to get tasks');
      return;
     }
     setTasks(prev => [...prev, data])
      } catch (err) {
        console.log(`Failled to create tasks`, err);
      }
    };

    const onEditTask = async (updateTask) => {
      try {
      const {data} = await axios.put(`http://localhost:5000/tasks/${updateTask._id}`, updateTask);
     if (!data) {
      console.log('Failed to update tasks');
      return;
     }
     setTasks(prev => prev.map(task => {
      if (task._id === updateTask._id) {
        return updateTask;
      } else {
        return task;
      }
    }))
      } catch (err) {
        console.error(`Failled to update tasks`, err);
      }
    };

    const onDeleteTask = async (deleteTask) => {
      try {
      await axios.delete(`http://localhost:5000/tasks/${deleteTask._id}`);
      setTasks(prev => prev.filter(task => task._id !== deleteTask._id));
      } catch (err) {
        console.log(`Failled to delete tasks`, err);
      }
    };
  return (
    <>
      <TaskList tasks={tasks} onEditTask={onEditTask} onDeleteTask={onDeleteTask}/>
      <button onClick={() => setShow(prev => !prev)}>
        Click here to create a new task
      </button>
      {show && <TaskForm onAddTask={onAddTask}/> }
    </>
  )
};

export default mainApp