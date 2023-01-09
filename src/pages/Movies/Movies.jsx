import { getMovieByQuery } from "services/MovieAPI";
import { useEffect, useState } from 'react';
import { MovieList } from "components/MoveList/MoveList";
import { MovieDetails } from "components/MovieDetails/MovieDetails";


export const Movies = () => {
    
    const [ searchValue , setSearchValue] = useState();
    const [ searchQuery, setSearchQuery] = useState();

    useEffect(() => {
          if (!searchValue) return;
          getMovieByQuery(searchValue).then(({ results }) => {
            console.log(results);
            setSearchQuery(results);
          });
        }, [searchValue]);
    
    const onFormSubmit = value => {
        value.preventDefault();
        const query = value.target.elements.searchName.value;
        setSearchValue(query);
        };

    console.log(searchValue);
    console.log(searchQuery);
    return ( 
    <>
        <form onSubmit={onFormSubmit}>
        <input name = "searchName" />   
        <button type="submit"> btnText </button>
        </form>
        <MovieList movies = {searchQuery}/>
        <MovieDetails />
    </>
    )
} 

