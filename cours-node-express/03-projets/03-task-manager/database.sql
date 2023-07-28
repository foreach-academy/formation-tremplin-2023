CREATE DATABASE task_manager;

CREATE TABLE tasks(
  task_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  completed BOOLEAN DEFAULT false
);