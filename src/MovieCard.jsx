import "./MovieCard.css";
import { useState } from "react";

/* eslint-disable react/prop-types */

function MovieCard({ title, poster, votes, id, onSelectMovie }) {
  const [like, setLike] = useState("♡");
  const [watched, setWatched] = useState("▫️");

  const handleChange = () => {
    onSelectMovie(id);
  };

  const handleLike = () => {
    setLike("♥");
  };

  const handleWatch = () => {
    setWatched("☑");
  };

  return (
    <div className="poster">
      <img
        onClick={handleChange}
        id="posterimg"
        src={`https://image.tmdb.org/t/p/w500${poster}`}
      />
      <h2 id="title">{title}</h2>
      <h2 id="like" onClick={handleLike}>
        {like}
      </h2>
      <h2 id="watched" onClick={handleWatch}>
        {watched}
      </h2>
      <h1 id="votes">{votes}</h1>
    </div>
  );
}

export default MovieCard;
