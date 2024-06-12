// import './MovieDetails.css'


function MovieCard(title, director) {

  return (
    <div>
      <h2>{title}</h2>
      {/* <img className="weather-icon" src={`http://openweathermap.org/img/wn/${icon}.png`} alt={weather} /> */}
      <h2>{director}</h2>
      {/* <p className={`temperature ${temperatureClass}`}>{temperature}°</p> */}
    </div>
  )
}

export default MovieCard
