import { motion } from "framer-motion";


function Movie({movie}){
    return (
        // lets show whatever we want of the movie
        // for example title and img


    /* for fade out and fade in the movie 
      when they disappear whe can do on the div child->
      for fade in-> animate={{ opacity:1}} initial={{ opacity:0}}

      for fade out exit={{ opacity:0 }} and also another component
        of frame motion called 
      also we need to wrappe
      
we can also determine the time that the transition is going to work
*/

        <motion.div animate={{ opacity:1 }} initial={{ opacity:0 }} exit={{ opacity:0 }} transition={{duration:2}} layout>
            <h2>{movie.title}</h2>
            <img src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} alt=""></img>
        </motion.div>
    )
}
export default Movie;