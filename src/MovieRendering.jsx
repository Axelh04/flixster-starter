
import MovieCard from "./MovieCard";

function MovieRendering(props) {

 const data = props

  return (
  <>
    <div >
      {data.map(movie => (
        <div key={movie.release_date}>
          <MovieCard title={movie.title} director={movie.director} />
        </div>
      ))}
    </div>
  </>
  );

}

export default MovieRendering;