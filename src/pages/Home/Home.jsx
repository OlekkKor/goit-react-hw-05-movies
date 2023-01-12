import { useEffect, useState } from 'react';
import  css  from './Home.module.css';
import { getTrendingMovie } from "../../services/MovieAPI.jsx"
import { MovieList } from "components/MoveList/MoveList.jsx";

function Home (){

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovie().then(({ results }) => {
        setMovies(results);
      });
    }, []);

    return ( 
        <div className={css.div}>
            <h1>Tranding todays</h1>
            <MovieList movies={movies} />
        </div>
    )
} 

export default Home;