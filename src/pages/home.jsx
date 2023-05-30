import { getSearchMovies } from "api";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filmId, setFilmId] = useState(searchParams.get('filmId') || '');
  const [films, setFilms] = useState([]);

  const updateQueryString = evt => {
    const value = evt.target.value;
    setFilmId(value);

    const newSearchParams = new URLSearchParams(searchParams);
    if (value === "") {
      newSearchParams.delete('filmId');
    } else {
      newSearchParams.set('filmId', value);
    }

    setSearchParams(newSearchParams);

    fetchMovieSearch(newSearchParams);
  };

  const fetchMovieSearch = async (params) => {
    try {
      const data = await getSearchMovies(params);
      setFilms(data.results); // Store only the 'results' array
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchMovieSearch(searchParams.get('filmId'));
  }, [searchParams]);

 

return (
  <div>
    <input value={filmId} onChange={updateQueryString} type="text" />
    {/* Render the films */}
    {films.map(film => (
      <div key={film.id}>
        <Link to={`/movie/${film.id}`}>{film.title}</Link>
        {film.backdrop_path && (
          <div>
            <img src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`} alt="" />
          </div>
        )}
      </div>
    ))}
  </div>
);
}
