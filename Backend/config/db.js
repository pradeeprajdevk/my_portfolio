/**
 * MongoDB Connection
 */

import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI, {});
    console.log('MongoDB connected!!');
  } catch (error) {
    console.error('Error Connecting to MongoDB:', error);
    process.exit(1);
  }
};
