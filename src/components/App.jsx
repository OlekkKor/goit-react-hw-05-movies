import { Home } from '../pages/Home/Home.jsx';
import { Movies } from '../pages/Movies/Movies.jsx';
import {MovieDetails} from './MovieDetails/MovieDetails.jsx';
import { Link, Route, Routes } from 'react-router-dom';


export const App = () => {
  return (
    <>
    <nav>
    <Link to="/">Home</Link>
    <Link to="/movies">Movies</Link>
    </nav>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:idMovie" element={<MovieDetails />} />

    </Routes>
    </>
  );
};
