
import './App.css';
import {useEffect, useState} from "react";
import Movie from "./Movie.js";
import Filter from "./Filter.js"
import {motion, AnimatePresence } from "framer-motion";

//https://developers.themoviedb.org/3/genres/get-movie-list

function App() {
  const [popular, setPopular]=useState([]);
  const [filtered, setFiltered]= useState([]);
  const [activeGenre , setActiveGenre] = useState(0);

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
    setFiltered(movies.results);
  }

  return (
    <div className="App">
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}></Filter>
      
      {/* we want to animate the grid so we have 
      to change div 
      to motion.div to have acces like animate
      animate={{ y:100 }}  
      
      with layout uf we have problems with 
      the visualitzation,
      we should put the layout on the child div too
      
      layout also works with display:flex
      
      for fade out and fade in the movie 
      when they disappear whe can do on the div child->
      for fade in-> animate={{ opacity:1}} initial={{ opacity:0}}

      for fade out exit={{ opacity:0 }}

      also we need to wrappe the motion div on a animatepresence
      

      now they firs dissappear and then the movies were reorganized
      we can also determine the time that the transition is going to work
      
      */}

      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.map(movie => {
            return <Movie key={movie.id} movie={movie}/>
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
