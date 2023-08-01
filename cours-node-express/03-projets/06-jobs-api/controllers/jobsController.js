// crée un job
const createJob = async (req, res) => {
  res.send('create job');
};

// récupère tous les jobs
const getAllJobs = async (req, res) => {
  res.send('get all jobs');
};

// récupère un job
const getJob = async (req, res) => {
  res.send('get job');
};

// modifie un job
const updateJob = async (req, res) => {
  res.send('update job');
};

// supprime un job
const deleteJob = async (req, res) => {
  res.send('delete job');
};

module.exports = { createJob, getAllJobs, getJob, updateJob, deleteJob };
