const history = `CREATE TABLE History (
  id SERIAL PRIMARY KEY,
  userId INT REFERENCES Users(id),
  movieTitle VARCHAR(255),
  movieYear VARCHAR(10),
  review TEXT,
  rating INT,
  reviewDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`
