CREATE DATABASE jobs_api;

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  CHECK (char_length(name) >= 3 AND char_length(name) <= 50),
  CHECK (char_length(password) >= 6)
);

CREATE TABLE jobs(
  job_id SERIAL PRIMARY KEY,
  company VARCHAR(50) NOT NULL,
  position VARCHAR(100) NOT NULL,
  status VARCHAR(255) NOT NULL CHECK (status in ('entretien', 'refusé', 'en attente')) DEFAULT 'en attente',
  user_id INT REFERENCES users(user_id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE FUNCTION update_updated_at() RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_jobs
BEFORE UPDATE ON jobs
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();