import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "api";
import { ImgGallery, DivGallery,DivCast } from "./filmsgallery.styled";


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
    <DivGallery>
      {actors.map((actor) => (
        <DivCast key={actor.id}>
          <h2>{actor.name}</h2>
          {actor.profile_path ? (
            <ImgGallery
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
              
            />
          ) : (
              <img src="https://1080motion.com/wp-content/uploads/2018/06/NoImageFound.jpg.png" alt=""
                width="300"
                height="450"
              />
          )}
        </DivCast>
      ))}
    </DivGallery>
  );
};
