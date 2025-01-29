import express from 'express';
import { getProjects, createProject } from '../controllers/index.js';

const router = express.Router();

router.route('/').get(getProjects).post(createProject);

export { router as ProjectRoute };
