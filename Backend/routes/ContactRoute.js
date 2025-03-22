import { Router } from 'express';
import { createContact } from '../controllers/index.js';

const router = Router();

router.post('/', createContact);

export { router as ContactRoute };
