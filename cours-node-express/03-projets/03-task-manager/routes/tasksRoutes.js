const express = require('express');
const router = express.Router();

const {
  createTask,
  getAllTasks,
  getSingleTask,
  updateTask,
  deleteTask
} = require('../controllers/tasksController.js');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:taskId').get(getSingleTask).put(updateTask).delete(deleteTask);

module.exports = router;
