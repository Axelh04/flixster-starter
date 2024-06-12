/* eslint-disable react/prop-types */

import MovieCard from "./MovieCard";

function MovieRendering({data}) {

    const arr = data.results

    const movieGenerator  = arr.map( (value, i) => {

        return (
            <div key={i}> 

                <MovieCard title={value.title} director={value.director} />

            </div>
        )

    });

  return (
  <>
    {movieGenerator};
  </>
  );

}

export default MovieRendering;