/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./MovieGrid.css";
import MovieCard from "./MovieCard";
// import SearchForm from "./searchform";

const MovieGrid = ({onSelectMovie}) => {
  const [updatedMovieData, setUpdatedMovieData] = useState([]);
  const [pageNum, setpageNum] = useState(1);
  const [text, setText] = useState("");
  const [sort, setSORT] = useState(null);


  function handleLoad() {
    setpageNum(pageNum +1)
  }

  function handleSORT1() {
    if(sort != "title")
      setSORT("title")
    else
    setSORT(null)

    setpageNum(1)

  }

  function handleSORT2() {
    if (sort!="primary_release_date")
    setSORT("primary_release_date")
    else
    setSORT(null)

    setpageNum(1)

  }

  function handleSORT3() {
    if (sort!="vote_average")
      setSORT("vote_average")
      else
    setSORT(null)

    setpageNum(1)
  }

    const handleChange = function (event) {
      setText(event.target.value);
      setpageNum(1)
    }

  function displayData(arrData) {
    if (pageNum === 1) {
      setUpdatedMovieData(arrData.results);
  
      }
      else {
        
      setUpdatedMovieData([...updatedMovieData, ...arrData.results]);
    
      }
  }

  const fetchData = async (TEXT, PAGE, SORT) => {
    const API_KEY = import.meta.env.VITE_APP_API_KEY;


  
  if (TEXT === "" && SORT === null) {
    
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${PAGE}`
    );
    const data = await response.json();
    displayData(data);
    console.log(data);
  }
  
  if (TEXT != "" && SORT === null)  {
    
    
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${TEXT}&page=${PAGE}`
    );
    const data = await response.json();
    displayData(data);
  }
  
  if (SORT != null) {
    
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=true&language=en-US&page=${PAGE}&sort_by=${SORT}.desc&vote_count.gte=50&with_original_language=en`      
    );
    const data = await response.json();
    displayData(data);
  }
 
  };

  useEffect(() => {
    fetchData(text, pageNum, sort);
  }, [pageNum,text,sort]);

  
  const filteredData = updatedMovieData.filter((movie) => {
    return movie.backdrop_path != null, movie.poster_path != null;
  });


  return (
    <div className="right-container">

    <div id = "search">
      <input onChange={handleChange} placeholder="Search.." />
      <span id = "clear">
      <p>Clear</p>
      </span>
      <span id = "dropdown">
      <p>Sort:</p>
      <p className = "sortingoption" onClick={handleSORT1}>@-A</p>
      <p className = "sortingoption" onClick={handleSORT2}>date</p>
      <p className = "sortingoption" onClick={handleSORT3}>rating</p>
      </span>
    </div>

  
      <div className="grid-container">


        { updatedMovieData.length > 0? (

          filteredData.map( (value, i) => {
          return (
          <MovieCard key={i} 
          title={value.title} 
          poster={value.poster_path} 
          votes={value.vote_average.toFixed(1)}  
          id = {value.id}
          
          onSelectMovie={onSelectMovie}
          /> 
        
        )
          })): (
            <div>None</div>
          )

          }


        <div id = "load" >

        <p onClick={handleLoad}>↓</p>

        </div>

      </div>

   

      
    </div>
  );
};


export default MovieGrid;
