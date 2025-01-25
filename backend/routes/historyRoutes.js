import express from 'express';
// import { saveReview, getHistory, verifyToken } from '../controllers/historyController.js';
// import { authenticateJWT } from '../controllers/authMiddleware.js';

const router = express.Router();

// // Route to save a review
// router.post("/", saveReview);  

// // Route to get user's review history
// router.get("/history",authenticateJWT, getHistory); // GET method for fetching data

// export default router;  
import pool from '../config/db.js';


router.post("/", async (req,res) => {
  const {movieTitle, movieYear, review, rating} = req.body;
 // const userId = req.user.id; // Assuming an authentication middleware provides 'req.user'

  try {
    const query = `INSERT INTO HISTORY (movieTitle, movieYear, review, rating) 
                  VALUES ($1, $2, $3, $4)
                  RETURNING *;`;
                  const values = [movieTitle, movieYear, review, rating];
    
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

export default router;
