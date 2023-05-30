import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "api";

export const Cast = () => {
  const castParams = useParams();
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const data = await getMovieCredits(castParams.id);
        setActors(data.cast);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching movie cast", error);
        setIsLoading(false);
      }
    };

    fetchMovieCast();
  }, [castParams.id]);

  if (isLoading) {
    return <p>Загрузка данных...</p>;
  }

  if (!actors || actors.length === 0) {
    return <p>Нет информации о актерском составе</p>;
  }

  return (
    <div>
      {actors.map((actor) => (
        <div key={actor.id}>
          <h2>{actor.name}</h2>
          {actor.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
            />
          ) : (
            <p>Изображение недоступно</p>
          )}
        </div>
      ))}
    </div>
  );
};
