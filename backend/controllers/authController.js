import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../config/db.js'; // Use your database connection
import dotenv from 'dotenv';

dotenv.config(); // Ensure environment variables are loaded

// Register a new user
export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    const userExists = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    const newUser = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email',
      [username, email, hashedPassword]
    );

    res.status(201).json({
      message: 'User created successfully',
      user: newUser.rows[0],
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Error registering user' });
  }
};

// Login a user
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (user.rows.length === 0) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.rows[0].password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { userId: user.rows[0].userId, username: user.rows[0].username },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );
    

    
    res.json({ token, message: 'Login successful' });
    
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Error logging in' });
  }
};
