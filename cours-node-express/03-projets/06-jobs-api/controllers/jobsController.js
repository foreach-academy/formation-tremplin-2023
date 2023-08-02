const { BadRequestError, NotFoundError } = require('../errors');
const db = require('../db');
const { StatusCodes } = require('http-status-codes');

// crée un job
const createJob = async (req, res) => {
  const {
    user: { userID },
    body: { company, position, status }
  } = req;

  if (!company || !position || !status) {
    throw new BadRequestError('Veuillez remplir tous les champs');
  }

  const {
    rows: [job]
  } = await db.query(
    'INSERT INTO jobs (company, position, status, user_id) VALUES ($1, $2, $3, $4) RETURNING *',
    [company, position, status, userID]
  );

  res.status(StatusCodes.CREATED).json({ job, msg: 'Offre créée' });
};

// récupère tous les jobs
const getAllJobs = async (req, res) => {
  const { userID } = req.user;
  const { rows: jobs } = await db.query(
    'SELECT * FROM jobs WHERE user_id = $1',
    [userID]
  );
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

// récupère un job
const getJob = async (req, res) => {
  const { id } = req.params;

  if (isNaN(Number(id))) {
    throw new BadRequestError('Identifiant invalide');
  }

  const {
    rows: [job]
  } = await db.query('SELECT * FROM jobs WHERE job_id = $1', [id]);

  if (!job) {
    throw new NotFoundError(`Pas d'offre d'emploi avec l'id ${id}`);
  }

  res.status(StatusCodes.OK).json({ job });
};

// modifie un job
const updateJob = async (req, res) => {
  const { id } = req.params;
  const { company, position, status } = req.body;

  if (isNaN(Number(id))) {
    throw new BadRequestError('Identifiant invalide');
  }

  if (!company || !position || !status) {
    throw new BadRequestError('Veuillez remplir tous les champs');
  }

  const {
    rows: [updatedJob]
  } = await db.query(
    'UPDATE jobs SET company = $1, position = $2, status = $3 WHERE job_id = $4 RETURNING *',
    [company, position, status, id]
  );

  if (!updatedJob) {
    throw new NotFoundError(`Pas d'offre d'emploi avec l'id ${id}`);
  }

  res.status(StatusCodes.OK).json({ job: updatedJob, msg: 'Offre modifiée' });
};

// supprime un job
const deleteJob = async (req, res) => {
  const { id } = req.params;

  if (isNaN(Number(id))) {
    throw new BadRequestError('Identifiant invalide');
  }

  const {
    rows: [deletedJob]
  } = await db.query('DELETE FROM jobs WHERE job_id = $1 RETURNING *', [id]);

  if (!deletedJob) {
    throw new NotFoundError(`Pas d'offre d'emploi avec l'id ${id}`);
  }

  res.status(StatusCodes.OK).json({ job: deletedJob, msg: 'Offre supprimée' });
};

module.exports = { createJob, getAllJobs, getJob, updateJob, deleteJob };
