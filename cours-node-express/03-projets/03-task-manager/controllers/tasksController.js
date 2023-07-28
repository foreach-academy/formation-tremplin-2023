const CustomError = require('../errors/customError.js');
const db = require('../db');

// crée une tâche
const createTask = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    throw new CustomError('Veuillez entrer une tâche', 400);
  }

  const {
    rows: [createdTask]
  } = await db.query('INSERT INTO tasks (name) VALUES ($1) RETURNING *', [
    name
  ]);

  res.status(201).json({ task: createdTask });
};

// récupère toutes les tâches
const getAllTasks = async (_req, res) => {
  const { rows: tasks } = await db.query('SELECT * FROM tasks');
  res.status(200).json({ tasks, count: tasks.length });
};

// récupère une tâche
const getSingleTask = async (req, res) => {
  const { taskId } = req.params;

  const {
    rows: [task]
  } = await db.query('SELECT * FROM tasks WHERE task_id = $1', [taskId]);

  if (!task) {
    throw new CustomError(`Pas de tâche avec l'id ${taskId}`, 404);
  }

  res.status(200).json({ task });
};

// modifie une tâche
const updateTask = async (req, res) => {
  const { taskId } = req.params;
  const { name, completed } = req.body;

  if (!name) {
    throw new CustomError('Veuillez entrer une tâche', 400);
  }

  const {
    rows: [updatedTask]
  } = await db.query(
    'UPDATE tasks SET name = $1, completed = $2 WHERE task_id = $3 RETURNING *',
    [name, completed, taskId]
  );

  if (!updatedTask) {
    throw new CustomError(`Pas de tâche avec l'id ${taskId}`, 404);
  }

  res.status(200).json({ task: updatedTask });
};

// supprime une tâche
const deleteTask = async (req, res) => {
  const { taskId } = req.params;

  const {
    rows: [deletedTask]
  } = await db.query('DELETE FROM tasks WHERE task_id = $1 RETURNING *', [
    taskId
  ]);

  if (!deletedTask) {
    throw new CustomError(`Pas de tâche avec l'id ${taskId}`, 404);
  }

  res.status(200).json({ task: deletedTask });
};

module.exports = {
  createTask,
  getAllTasks,
  getSingleTask,
  updateTask,
  deleteTask
};
