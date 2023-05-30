import axios from 'axios';

const KEY_API = '9a8c638c540468cada08c95a1c2143ed';
const BASE_URL = 'https://api.themoviedb.org/3';
const defaultParams = {
  api_key: KEY_API,
};

const moviesApiClient = axios.create({
  baseURL: BASE_URL,
  params: defaultParams,
});

export const getPoPMovies = async () => {
  const { data } = await moviesApiClient.get('/trending/movie/week');
  return data;
};

export const getSearchMovies = async (query) => {
  const { data } = await moviesApiClient.get('/search/movie', {
    params: { query },
  });
  return data;
};

export const getMovieDetails = async (id) => {
  const { data } = await moviesApiClient.get(`movie/${id}`);
  return data;
};

export const getMovieCredits = async (id) => {
  const { data } = await moviesApiClient.get(`/movie/${id}/credits`);
  return data;
};

export const getMovieReviews = async (id) => {
  const { data } = await moviesApiClient.get(`/movie/${id}/reviews`);
  return data;
};
/* 
/trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
/search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
/movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
/movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
/movies/get-movie-reviews запит оглядів для сторінки кінофільму.
*/