import { getMovieById } from "services/MovieAPI"
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";



export const MovieDetails = () => {
    const { idMovie }  = useParams();
    console.log(idMovie);
    const [movie, setMovie ] = useState(null);
    
    useEffect(() => {getMovieById(idMovie).then((data) => {setMovie(data)})}, [idMovie])

      if (!movie){ return } 
    return (
        <>
        <p>{movie.title}</p>
        <img src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} alt={movie.title}/>
        </>
    )
}