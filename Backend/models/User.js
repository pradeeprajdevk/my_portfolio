/**
 * User Model
 */

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  bio: { type: String },
  linkedinURI: { type: String },
  githubURI: { type: String },
});

const User = mongoose.model('User', userSchema);

export { User };
