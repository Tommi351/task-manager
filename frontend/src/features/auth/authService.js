import axios from 'axios'

const API_URL = '/users'
const Login_URL = '/users/login'

// Register user
const register = async (userData) => {
    const response = await axios.post(`http://localhost:5000${API_URL}`, userData);
    
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Login user
const login = async (userData) => {
    const response = await axios.post(`http://localhost:5000${Login_URL}`, userData);
    
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const logout = async () => {
    localStorage.removeItem('user');
}

const authService = {
    register,
    logout,
    login
}

export default authService