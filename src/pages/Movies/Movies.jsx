import css from "./Movie.module.css"

import { getMovieByQuery } from "services/MovieAPI";
import { useEffect, useState } from 'react';
import { MovieList } from "components/MoveList/MoveList";


function Movies (){

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

    return ( 
    <div className={css.formStyle}>
        <form onSubmit={onFormSubmit} className={css.form}>
          <input name = "searchName" />   
          <button type="submit"> Find </button>
        </form>
        <MovieList movies = {searchQuery}/>
    </div>
    )
} 

export default Movies;