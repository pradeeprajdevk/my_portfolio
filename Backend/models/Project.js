/**
 * Project Model
 */

import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  techStack: [String],
  liveDemo: { type: String },
  sourceCode: { type: String },
});

const Project = mongoose.model('Project', projectSchema);

export { Project };
