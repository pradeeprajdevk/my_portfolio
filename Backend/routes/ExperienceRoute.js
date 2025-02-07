import express from 'express';
import { getExperience, addExperience } from '../controllers/index.js';

const router = express.Router();

router.route('/').get(getExperience).post(addExperience);

export { router as ExperienceRoute };
