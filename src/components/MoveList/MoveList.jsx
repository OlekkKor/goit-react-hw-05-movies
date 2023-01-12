import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css"

export const MovieList = ({ movies }) => {
  const location = useLocation();


  if (!movies){ return } 
  
  else {

    return (
    <ul className={css.listMovies}>
      {movies.map(movie => {
      return <li key={movie.id} className={css.itemMovie}>
       <Link to={`/movies/${movie.id}`} state ={{ from: location}} className={css.cardMovie}>
          <h2>{movie.title}</h2>
           <img
           src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
           alt={movie.title}
          />
         </Link>
        </li>
    })}
    </ul>
  )}
};
