import axios from 'axios';

const API_URL = '/tasks'

// Create user task
const createTask = async (taskData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(`http://localhost:5000${API_URL}`, taskData, config);

    if (response.data) {
        localStorage.getItem('task')
    }

    return response.data
}

// Get user tasks
const getTasks = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(`http://localhost:5000${API_URL}`, config);

    return response.data
}

// Update user task
const updateTask = async (id, taskData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.put(`http://localhost:5000${API_URL}/${id}`, taskData, config);

    return response.data
}

// Delete user task
const deleteTask = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(`http://localhost:5000${API_URL}/${id}`, config);

    return response.data
}

const taskService = {
   createTask,
   getTasks,
   updateTask,
   deleteTask
}

export default taskService