
import './App.css';
import {useEffect, useState} from "react";
import Movie from "./Movie.js";


function App() {
  const [popular, setPopular]=useState([]);
  
  useEffect(()=>{
    fetchPopular();
  },[]);


 const fetchPopular = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=f4f52e018598f96398d4d16b6a0baeaa&language=en-US&page=1'
    );
      //'https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1'
    //https://api.themoviedb.org/3/movie/popular?api_key=f4f52e018598f96398d4d16b6a0baeaa&language=en-US&page=1
    const movies = await data.json();
    setPopular(movies.results);
    console.log(movies.results);
 
  }

  return (
    <div className="App">
      <div className="popular-movies">
        {popular.map(movie => {
          return <Movie key={movie.id} movie={movie}/>
        })}
      </div>
    </div>
  );
}

export default App;
