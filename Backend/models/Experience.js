/**
 * Experience Model
 */

import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  duration: { type: String, required: true },
  description: { type: String, required: true },
});

const Experience = mongoose.model('Experience', experienceSchema);

export { Experience };
