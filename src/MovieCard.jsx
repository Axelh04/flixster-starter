// import './MovieDetails.css'

import './MovieCard.css'
// import MovieDetails from './MovieDetails';
// import MovieModal from './MovieModal'

/* eslint-disable react/prop-types */

function MovieCard({title, poster, votes, id, onSelectMovie }){
  
  const handleChange = () => {
    onSelectMovie(id);
  };


  return (
    <div className="poster">
      <img onClick={handleChange} id = "posterimg" src = {`https://image.tmdb.org/t/p/w500${poster}`} /> 
      <h2  id = "title">{title}</h2>
      <h1 id = "votes">{votes}</h1>
    </div>
  )
}

export default MovieCard
