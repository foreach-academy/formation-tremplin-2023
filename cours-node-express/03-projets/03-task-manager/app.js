require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const db = require('./db');

app.use(express.json());

// crée une tâche
app.post('/api/tasks', async (req, res) => {
  const { title } = req.body;

  const {
    rows: [task]
  } = await db.query('INSERT INTO tasks (name) VALUES ($1) RETURNING *', [
    title
  ]);

  res.status(201).json({ task });
});

// récupère toutes les tâches
app.get('/api/tasks', async (_req, res) => {
  const { rows: tasks } = await db.query('SELECT * FROM tasks');
  res.status(200).json({ tasks, count: tasks.length });
});

// récupère une tâche
app.get('/api/tasks/:taskId', async (req, res) => {
  const { taskId } = req.params;

  const {
    rows: [task]
  } = await db.query('SELECT * FROM tasks WHERE task_id = $1', [taskId]);

  if (!task) {
    res.status(400).json({ msg: `Pas de tâche avec l'id ${taskId}` });
    return;
  }

  res.status(200).json({ task });
});

// modifie une tâche
app.put('/api/tasks/:taskId', (req, res) => {
  res.send('update task');
});

// supprime une tâche
app.delete('/api/tasks/:taskId', (req, res) => {
  res.send('delete task');
});

app.use((_req, res) => res.status(404).json({ msg: "La route n'existe pas" }));
app.use((err, _req, res, _next) => res.status(500).json({ msg: err.message }));

const port = 5000;
app.listen(port, console.log(`Server is listening on port ${port}...`));
