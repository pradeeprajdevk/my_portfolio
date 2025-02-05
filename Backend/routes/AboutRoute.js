import express from 'express';
import { getAboutSection, createAboutSection } from '../controllers/index.js';

const router = express.Router();

router.route('/').get(getAboutSection).post(createAboutSection);

export { router as AboutRoute };
