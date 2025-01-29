import express from 'express';
import { getUsers, createUser } from '../controllers/index.js';

const router = express.Router();

router.route('/').get(getUsers).post(createUser);

export { router as UserRoute };
