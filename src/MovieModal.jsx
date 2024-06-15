import "./MovieModal.css";

/* eslint-disable react/prop-types */

function MovieModal({ title, runtime, release, overview, poster, youtubeID }) {
  return (
    <section>
      <img id="modalposter" src={`https://image.tmdb.org/t/p/w500${poster}`} />
      <span id="titledetails">
        <h1>{title}</h1>
        <h3>Runtime : {runtime} min</h3>
        <h3>Release Date : {release}</h3>
      </span>

      <h5>{overview}</h5>

      <iframe
        width="80%"
        height="300vh"
        src={`https://www.youtube.com/embed/${youtubeID}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </section>
  );
}

export default MovieModal;
