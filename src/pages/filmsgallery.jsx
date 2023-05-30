import React, { useEffect,  useState } from 'react';
import { Link,  } from 'react-router-dom';
import { getPoPMovies } from 'api';
import { useLocation } from 'react-router-dom';

export default function FilmGallery() {
  const [movies, setMovies] = useState([]);
  
  const location = useLocation()
  
  useEffect(() => {
    getPoPMovies().then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <div>
      {movies.length === 0 ? (
        <div>No movies found</div>
      ) : (
        movies.map((movie) => (
          <Link  key={movie.id} to={{ pathname: `${movie.id}`, } } state={{from:location}} >{movie.title}</Link>
          // Render additional movie information as needed
        ))
      )}
    </div>
  );
}
