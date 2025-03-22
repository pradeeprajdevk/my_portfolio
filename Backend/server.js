import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import {
  UserRoute,
  ProjectRoute,
  AboutRoute,
  ExperienceRoute,
  SkillRoute,
  ContactRoute,
} from './routes/index.js';

// Set the path for the environment file based on NODE_ENV
const envFile =
  process.env.NODE_ENV === 'production'
    ? '.env.production'
    : '.env.development';

// Load the environment variables
dotenv.config({ path: envFile });

console.log(`Loaded env file: ${envFile}`);
console.log(`PORT: ${process.env.PORT}`); // Debugging line to check if the variable is loaded

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Working....');
});

app.use('/users', UserRoute);
app.use('/projects', ProjectRoute);
app.use('/about', AboutRoute);
app.use('/experience', ExperienceRoute);
app.use('/skills', SkillRoute);
app.use('/contact', ContactRoute);

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
