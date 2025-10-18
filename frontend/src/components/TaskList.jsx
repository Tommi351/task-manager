import React from 'react'
import TaskItem from "./TaskItem"
const TaskList = ({tasks, onEditTask, onDeleteTask}) => {
  return (
    <ul className='Task-List'>
    {tasks.map(task => (
      <TaskItem key={task._id} {...task} onEditTask={onEditTask} onDeleteTask={onDeleteTask}/>
    ))}
    </ul>
 );
};
export default TaskList