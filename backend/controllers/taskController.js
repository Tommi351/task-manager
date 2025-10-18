const Tasks = require('../models/Tasks');
const User = require('../models/User');

// Get all tasks
const getTasks = async (req, res) => {
    try {
    const duties = await Tasks.find({user: req.user.id});
    if (!duties) {
            return res.status(404).json({ message: "Task not found" });
        }
    res.status(200).json(duties);
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Server error" });
    }
};

// Make a new task
const createTasks = async (req, res) => {
    if (!req.body.description) {
        throw new Error('Please add a text value');
    }
    try {
        const newTask = new Tasks({
            user: req.user.id,
            ...req.body
        });
        await newTask.save();
        console.log(newTask);
        res.status(200).json(newTask);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
}

// Update tasks
const updateTasks = async (req, res) => {
   try {
    const task = await Tasks.findById(req.params.id);

    if (!task) {
        res.status(400)
        throw new Error('Task not found')
    }
    
    // Check for user
    if (!req.user) {
       res.status(401);
       throw new Error('User not found');
    }
    
    // Make sure logged in user matches their own tasks
    if (task.user.toString() !== req.user.id) {
       res.status(401);
       throw new Error('User not authorized');
    }

    const updatedTasks = await Tasks.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedTasks)
   } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
   }
}

// Delete tasks
const deleteTasks = async (req, res) => {
 try {
    const task = await Tasks.findById(req.params.id);
    if (!task) {
        res.status(400)
        throw new Error('Task not found')
    }
    
    // Check for user
    if (!req.user) {
       res.status(401);
       throw new Error('User not found');
    }
    
    // Make sure logged in user matches their own tasks
    if (task.user.toString() !== req.user.id) {
       res.status(401);
       throw new Error('User not authorized');
    }

    await task.deleteOne()
    res.status(200).json({id: req.params.id})
 } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
 }
}

module.exports = {getTasks,
  createTasks, 
  updateTasks,
  deleteTasks
};