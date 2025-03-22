import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: [String],
    required: true,
  },
  technologies: {
    type: [String],
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  liveLink: {
    type: String,
    required: false,
  },
  githubLink: {
    type: String,
    required: true,
  },
});

const Project = mongoose.model('Project', projectSchema);

export { Project };
