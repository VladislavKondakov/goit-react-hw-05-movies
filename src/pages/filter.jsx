import { useEffect, useState,useRef } from "react";
import {  useParams } from "react-router-dom";
import { getMovieDetails } from "api";
import { Link } from "react-router-dom";
import { Outlet, useLocation } from "react-router-dom";
import { ImgMain } from "components/Cast.styled,";
import { DivMainInf,DivTextCollection,ButtonGallery,DivButtons,ButtonBack} from "components/filmsgallery.styled";





export default function Cards() {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  
  const location = useLocation()
  const backLinkLocationRef = useRef(location.state?.from ?? '/movie')

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(params.id);
        if (data) {
          setMovieDetails(data);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setIsLoading(false);
      }
    };

    console.log(location)

    if (params.id) {
      fetchMovieDetails();
    }
  }, [params.id,location]);

  return (
    <div>
      <Link to={backLinkLocationRef.current}>
       <ButtonBack>Go Back</ButtonBack> 
      </Link>
      {isLoading ? (
        <p>Loading movie details...</p>
      ) : Object.keys(movieDetails).length > 0 ? (
        <div>
            <DivMainInf>
               <DivTextCollection>
            <h2>{movieDetails.original_title}</h2>
            <p>{movieDetails.overview}</p>
              </DivTextCollection>
              <ImgMain>
            <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
            </ImgMain>
          </DivMainInf>
        <ul>
        <DivButtons>
              <li
              ><Link to="Cast">
                <ButtonGallery>Cast</ButtonGallery> 
                </Link>
        </li>
        <li
              ><Link to="Reviews">
                <ButtonGallery>Reviews</ButtonGallery> 
              </Link>
       </li>
       </DivButtons>
                < Outlet />
              
    </ul>
     </div>
      ) : (
        <p>No movie details available.</p>
      )}
      
    </div>
  );
}
