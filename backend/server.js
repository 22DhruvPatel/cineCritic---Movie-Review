import app from './app.js'; // Import app setup from app.js

const port = 5000; // Default to port 5000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})