/**
 * User Model
 */

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  bio: { type: String },
  socialLinks: [
    {
      _id: false,
      id: { type: Number, required: true },
      url: { type: String, required: true },
      icon: { type: String, required: true },
      label: { type: String, required: true },
    },
  ],
});

const User = mongoose.model('User', userSchema);

export { User };
