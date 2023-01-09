import { getTrendingMovie } from "../../services/MovieAPI.jsx"
import { useEffect, useState } from 'react';

import { MovieList } from "components/MoveList/MoveList.jsx";

export const Home = () => {

    const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovie().then(({ results }) => {
      setMovies(results);
    });
  }, []);

    console.log(getTrendingMovie());

    return ( 
        <>
            <h1>Tranding todays</h1>
            <MovieList movies={movies} />
        </>
    )
} 