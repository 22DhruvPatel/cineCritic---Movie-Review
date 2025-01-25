import jwt from 'jsonwebtoken';

export const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1]; // Extract the token (Bearer <token>)
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ error: 'Forbidden' });
      }
      req.user = user; // Attach user data to the request
      next();
    });
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};
