# cineCritic---Movie-Review
CineCritic is a movie review website that allows users to explore, review, and rate movies. Implemented user authentication with secure login/register functionality and encrypted password storage. Integrated OMDB API to fetch real-time movie data, including posters, ratings, and summaries. 


Here's the updated **README** with the **GitHub Flavored Markdown (GFM)** format that you can directly copy and paste into your GitHub repository's README file.

```markdown
# Movie Review App

Welcome to the **Movie Review App**! This is a web application where users can log in, view movies, and submit reviews. The app uses a **React** frontend and a **Node.js/Express** backend, with a **PostgreSQL** database to store movie reviews and user information.

## Features

- **User Authentication**: Secure login and registration system.
- **Movie Reviews**: Users can view movie details and post reviews with ratings.
- **Movie List**: Browse a list of popular movies fetched from an external API (e.g., OMDB API).
- **Review History**: View your previously submitted reviews.

## Technologies Used

- **Frontend**: React.js, React Router, Axios
- **Backend**: Node.js, Express.js, PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **Database**: PostgreSQL
- **Styling**: CSS, Bootstrap (optional)

## Project Structure

```
movie-review-app/
├── backend/
│   ├── controllers/
│   │   ├── authController.js        # Handles user authentication
│   │   ├── movieController.js       # Manages movie-related operations
│   └── models/
│       ├── User.js                  # Defines user schema
│       ├── Review.js                # Defines review schema
│   ├── routes/
│   │   ├── authRoutes.js            # Routes for authentication
│   │   ├── movieRoutes.js           # Routes for movie data and reviews
│   ├── config/
│   │   └── db.js                    # Database connection
│   ├── app.js                       # Express app setup
│   ├── server.js                    # Starts the server
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js            # Navigation bar
│   │   │   ├── Login.js             # Login form
│   │   │   ├── Register.js          # Registration form
│   │   │   ├── MovieList.js         # Displays list of movies
│   │   │   ├── MovieReview.js       # Displays and submits movie reviews
│   │   ├── pages/
│   │   │   ├── Home.js              # Homepage
│   │   │   ├── MovieDetails.js      # Detailed movie information
│   ├── package.json
├── .gitignore                       # Specifies files to be ignored by Git
├── README.md                        # This file
```

## Getting Started

### 1. Clone the repository:

```bash
git clone https://github.com/22DhruvPatel/cineCritic---Movie-Review.git
```

### 2. Install dependencies:

For **backend**:

```bash
cd backend
npm install
```

For **frontend**:

```bash
cd frontend
npm install
```

### 3. Set up environment variables:

Create a `.env` file in the **backend** directory and set the following variables:

```
JWT_SECRET=your_jwt_secret_key
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
```

### 4. Running the application:

- To start the **backend**, run the following in the **backend** directory:

```bash
npm start
```

- To start the **frontend**, run the following in the **frontend** directory:

```bash
npm start
```

The backend will be running on `http://localhost:5000` and the frontend on `http://localhost:3000`.

### 5. Database setup:

Make sure you have a PostgreSQL database running and set up with the following tables:

- **users**: For storing user information
- **reviews**: For storing movie reviews

You can run the following SQL commands to create these tables:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  userId INTEGER REFERENCES users(id),
  movieTitle VARCHAR(255) NOT NULL,
  movieYear INTEGER,
  review TEXT,
  rating INTEGER
);
```

## API Endpoints

### Authentication:

- **POST /api/auth/register**: Registers a new user.
- **POST /api/auth/login**: Logs in a user and returns a JWT token.

### Movies and Reviews:

- **GET /api/movie**: Fetches a list of movies (using an external API like OMDB).
- **POST /api/history**: Submits a new movie review (requires authentication).
- **GET /api/history**: Fetches all reviews made by the authenticated user.

## Troubleshooting

- If you run into issues with the database connection, check your `.env` variables and ensure PostgreSQL is running on the specified port.
- If you encounter any errors related to JWT, make sure your token is being sent correctly in the `Authorization` header.


