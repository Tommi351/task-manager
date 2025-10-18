const express = require('express');
const router = express.Router();
const {getTasks, createTasks, updateTasks, deleteTasks} = require('../controllers/taskController');
const {protect} = require('../middleware/authMiddleware');

router.get('/test', protect, (req, res) => {
  console.log(req.user);
  res.send(req.user);
});

router.get('/', protect, getTasks);

router.post('/', protect, createTasks);

router.put('/:id', protect, updateTasks);

router.delete('/:id', protect, deleteTasks);

module.exports = router;