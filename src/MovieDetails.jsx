/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./MovieDetails.css";
import MovieModal from "./MovieModal";

function MovieDetails({ modalID }) {
  const [modalData, setmodalData] = useState(null);
  const [backImg, setbackImg] = useState(null);
  const [videoKey, setvideoKey] = useState("");

  function displayData(arrData) {
    setmodalData(arrData);
    setbackImg(arrData.backdrop_path);
    for (let i = 0; i < arrData.videos.results.length; i++) {
      if (arrData.videos.results[i].name.toLowerCase().includes("trailer")) {
        setvideoKey(arrData.videos.results[i].key);
        break
      }
      else {setvideoKey(arrData.videos.results[0].key)}
    }

      
  }

  const fetchData = async (movie_id) => {
    const API_KEY = import.meta.env.VITE_APP_API_KEY;

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&append_to_response=videos`
    );
    const data = await response.json();
    displayData(data);
    console.log(data.videos)
  };

  useEffect(() => {
    fetchData(modalID);
  }, [modalID]);

  let background = {};
  background = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original${backImg}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "50%",
    height: "100vh",
    margin: "0",
    display: "inline-block",
    "overflow-y": "scroll",
  };

  if (modalID === "") {
    return (
      <div className="null-left-container">
        <h1>
          Welcome to <span>Flixter.</span>
        </h1>
      </div>
    );
  } else {
    return (
      <div style={background}>
        <MovieModal
          title={modalData.title}
          runtime={modalData.runtime}
          release={modalData.release_date}
          overview={modalData.overview}
          poster={modalData.poster_path}
          youtubeID={videoKey}
        />
      </div>
    );
  }
}
export default MovieDetails;
