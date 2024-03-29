const express = require('express');
const router = express.Router();

const authenticateUser = require('../middlewares/authentication.js');

const {
  createJob,
  getAllJobs,
  getJob,
  updateJob,
  deleteJob
} = require('../controllers/jobsController.js');

router.use(authenticateUser);
router.route('/').post(createJob).get(getAllJobs);
router.route('/:id').get(getJob).put(updateJob).delete(deleteJob);

module.exports = router;
