import { Link } from "react-router-dom";

export const MovieList = ({ movies }) => {
  if (!movies){ return } 
  
  else {
  console.log(movies) 
    return (
    <ul>
      {movies.map(movie => {
      return <li key={movie.id}>
       <Link to={`/movies/${movie.id}`}>
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
