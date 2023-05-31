import { getSearchMovies } from "api";
import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams} from "react-router-dom";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filmId, setFilmId] = useState(searchParams.get('filmId') || '');
  const [films, setFilms] = useState([]);

  const location = useLocation()

  const updateQueryString = (evt) => {
    evt.preventDefault();
    const newSearchParams = new URLSearchParams(searchParams);

    if (filmId === "") {
      newSearchParams.delete('filmId');
    } else {
      newSearchParams.set('filmId', filmId);
    }

    setSearchParams(newSearchParams);
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
      <form onSubmit={updateQueryString}>
        <input
          value={filmId}
          onChange={(evt) => setFilmId(evt.target.value)}
          type="text"
        />
        <button type="submit">Search</button>
      </form>
      {/* Render the films */}
      {films.map((film) => (
        <div key={film.id}>
          <Link  state={{ from: location }} to={`/movie/${film.id}`}>{film.title}</Link>
          {film.backdrop_path && (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
                alt=""
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
