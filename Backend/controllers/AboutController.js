import { About } from '../models/index.js';

export const getAboutSection = async (req, res) => {
  try {
    const about = await About.find();
    res.json(about);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createAboutSection = async (req, res) => {
  try {
    const about = new About(req.body);
    await about.save();
    res.status(201).json(about);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
