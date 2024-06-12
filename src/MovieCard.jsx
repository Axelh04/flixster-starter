// import './MovieDetails.css'

/* eslint-disable react/prop-types */

function MovieCard({title, director, poster, votes }) {

    console.log("movie card poster:", poster)

  return (
    <div>
      <img src = {`https://image.tmdb.org/t/p/w500${poster}`} /> 
      <h2>{title}</h2>
      <h3>{director}</h3>
      <h4>{votes}</h4>
    </div>
  )
}

export default MovieCard
