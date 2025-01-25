import express from 'express';
import {getMovies}  from '../controllers/movieController.js';

const router = express.Router();

router.get('/', getMovies);  //Route to get movie data

export default router;