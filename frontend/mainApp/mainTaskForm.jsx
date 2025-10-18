const TaskForm = ({onAddTask}) => {
  const handleSubmit = (e) => {
   e.preventDefault();
   const newTask = {
    title: e.target.title.value,
    description: e.target.description.value,
    status: e.target.status.value,
   };
   onAddTask(newTask);
   e.target.reset()
  }
  return (
    <form onSubmit={handleSubmit} id="Task-Form">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title"/>

        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" required></textarea>

        <label htmlFor="status">Status</label>
        <input type="text" id="status" name="status"/>

        <button type="submit">Add Task</button>
    </form>
  );
};
export default TaskForm