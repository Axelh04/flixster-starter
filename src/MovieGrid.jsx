import { useEffect, useState } from 'react';
import './MovieGrid.css'
import MovieRendering from './MovieRendering';

const MovieGrid = () => {

    const [movieData, setData] = useState(null);

    const fetchData = async () => {
        const API_KEY = import.meta.env.VITE_APP_API_KEY
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=1`)
        const data = await response.json()
        setData(data)
      };


      useEffect(() => {
        // for (let moviePage = 1; moviePage < 3; moviePage++ )
          fetchData();
        
      }, []);

    
    return (
        
        
  <div className="right-container">
    <div className='grid-container' >

    {/* <MovieRendering data={movieData} /> */}

    </div>
  </div>
    );
}

export default MovieGrid
