import { Experience } from '../models/index.js';

export const getExperience = async (req, res) => {
  try {
    const experience = await Experience.find().sort({ _id: -1 });
    res.json(experience);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const addExperience = async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(201).json(experience);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
