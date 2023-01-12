import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: '7cc8f2b59ca60b1fd201f6b47b1838fe',
};

export const getTrendingMovie = async () => {
  const { data } = await axios.get('/trending/movie/day', {
    params: {
      page: 1,
    },
  });
  return data;
};


export const getMovieByQuery = async query => {
  const { data } = await axios.get('/search/movie', {
    params: {
      query,
    },
  });
  return data;
};


export const getMovieById = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}`);    
  return data;
};

export const getCastById = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}/credits`);    
  return data;
};


export const getReviewById = async movie_id => {
  const { data } = await axios.get(`/movie/${movie_id}/reviews`);    
  return data;
};