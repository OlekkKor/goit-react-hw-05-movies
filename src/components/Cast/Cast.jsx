import { getCastById } from 'services/MovieAPI';
import { useParams } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import css from "./Cast.module.css"

function Cast () {
    const { idMovie } = useParams();
    const [ castInfo, setCastInfo] = useState();
  

  const getCast = async idMovie => {
     
      const { cast } = await getCastById(idMovie);
      setCastInfo(cast);
  };

  useEffect(() => {
    getCast(idMovie)
  }, [idMovie]);


  if (!castInfo) {
    return null;
  }

    return (
        <>
        <ul className={css.castContainer}>
         {castInfo.map(({character, name, profile_path, id}) => {
            return (
                <li key={id}  className={css.actorItem}>
                  <div className={css.actorImg}>
                    <img src = {'https://image.tmdb.org/t/p/w500' + profile_path} alt={name} className={css.image}/>
                    <p className={css.actorName}>{name}</p>
                    <p className={css.actorChar}>{character}</p>
                  </div>
                </li>
            )
        })} 
        </ul>
        </>
    )
}


export default Cast;