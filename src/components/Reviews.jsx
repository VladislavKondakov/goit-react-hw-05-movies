import { useState, useEffect } from "react";
import { getMovieReviews } from "api";
import { useParams } from "react-router-dom";

export const Reviews = () => {
  const reviewParams = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const data = await getMovieReviews(reviewParams.id);
        if (data) {
          setReviews(data.results);
        }
      } catch (error) {
        console.error("Error fetching movie reviews");
      }
      };
      

    fetchMovieReviews();
  }, [reviewParams.id]);

  return (
    <div>
      {reviews.length === 0 ? (
        <p>На данный фильм отзывов нет</p>
      ) : (
        reviews.map((review) => (
  <div key={review.id}>
    <h2>{review.author}</h2>
    <p>{review.content}</p>
  </div>
))

      )}
    </div>
  );
};
