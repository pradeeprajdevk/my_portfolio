/**
 * About Model
 */

import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema({
  description: { type: String, required: true },
});

const About = mongoose.model('About', aboutSchema);

export { About };
