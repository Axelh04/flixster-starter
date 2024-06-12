import { useEffect, useState } from "react";
import "./MovieGrid.css";
import MovieCard from "./MovieCard";

const MovieGrid = () => {
  const [movieData, setmovieData] = useState(null);

  const fetchData = async () => {
    const API_KEY = import.meta.env.VITE_APP_API_KEY;
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=1`
    );
    const data = await response.json();
    setmovieData(data.results);
  };

  useEffect(() => {
    // for (let moviePage = 1; moviePage < 3; moviePage++ )
    fetchData();
  }, []);
  
  console.log(movieData)

  return (
    <div className="right-container">
      <div className="grid-container">
        { movieData && movieData.length > 0 ? (
          movieData.map( (value, i) => {
          return (
          
          <MovieCard key={i} title={value.title} director={value.director} poster={value.poster_path} votes={value.vote_average} /> 
        
        )
          })): (
            <div>Loading...</div>
          )}
      </div>
    </div>
  );
};

export default MovieGrid;
