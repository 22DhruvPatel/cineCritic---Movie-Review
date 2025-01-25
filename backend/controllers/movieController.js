import axios from 'axios';

export const getMovies = async (req,res) => {
  try {
    const response = await axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=ead08f38");
    res.json(200).json(response.data.results);  // send the movie data to frontend
  } catch (error) {
    res.status(500).json({error: "Error fetching movies from API"});
  }
}