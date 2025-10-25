require('dotenv').config();
const path = require('path')
const express = require('express');
const app = express();
const cors = require('cors');
const colors = require('colors');
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');

const taskRoutes = require('./routes/tasksRoutes');
const userRoutes = require('./routes/userRoutes');

const Tasks = require('./models/Tasks');
const User = require('./models/User');

connectDB();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);


app.listen(PORT, () => {
   console.log(`App is listening on Port ${PORT}`)
});