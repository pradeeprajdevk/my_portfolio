import { Router } from 'express';
import { getSkills, createSkill } from '../controllers/index.js';

const router = Router();

router.get('/', getSkills);
router.post('/', createSkill);

export { router as SkillRoute };
