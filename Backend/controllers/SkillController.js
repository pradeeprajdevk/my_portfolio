import { Skill } from '../models/index.js';

export const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (e) {
    console.error(e);
    res.status(400).json({
      message: e.message,
    });
  }
};

export const createSkill = async (req, res) => {
  try {
    const skill = new Skill(req.body);
    await skill.save();
    res.status(201).json(skill);
  } catch (e) {
    console.error(e);
    res.status(400).json({
      message: e.message,
    });
  }
};
