import express from 'express';
import authRoutes from './routes/authRoutes.js';
import movieRoutes from './routes/movieRoutes.js';
import cors from 'cors';
import dotenv from 'dotenv';
import historyRoutes from './routes/historyRoutes.js';


dotenv.config(); // make env values accessible throughout the application. 
const app = express();


app.use(cors()); // Allow cross-origin requests from any origin
app.use(express.json());


app.use("/api/movie", movieRoutes); // Mount movie routes to '/api/movies'
app.use('/api/auth', authRoutes);

app.use('/api/history', historyRoutes);



app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({error: "Something went wrong!"});
});

export default app;