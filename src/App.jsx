import './App.css'
import MovieGrid from './MovieGrid'
import MovieDetails from './MovieDetails'
import { useState } from 'react'

const App = () => {
   
  const [currentMovieID, setCurrentMovieID] = useState('');


  const onSelectMovie = (selectedMovieID) => {
    setCurrentMovieID(selectedMovieID);
  };

  return (
  <div className="App">
    <MovieDetails modalID={currentMovieID} />
    <MovieGrid onSelectMovie={onSelectMovie} />
  </div>

  );
}

export default App
