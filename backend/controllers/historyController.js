import db from '../config/db.js';
import jwt from 'jsonwebtoken';

// Save review in the history
export const saveReview = async (req, res) => {
  const { movietitle, movieyear, review, rating } = req.body;
  const {userid} = req; //Get userid from the token instead of request URl parameters.

  try {
    const result = await db.query(
      'INSERT INTO History (userid, movietitle, movieyear, review, rating) VALUES ($1, $2, $3, $4, $5)',
      [userid, movietitle, movieyear, review, rating]
    );
    res.status(200).json({ message: "Review Saved Successfully" });
  } catch (error) {
    res.status(500).json({ Error: "Error saving reviews" });
  }
};

// Get review history for a user
export const getHistory = async (req, res) => {
  const { userid } = req.params;

  try {
    const result = await db.query(
      'SELECT * FROM history WHERE userid = $1', [userid]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ Error: "Error fetching history." });
  }
};



