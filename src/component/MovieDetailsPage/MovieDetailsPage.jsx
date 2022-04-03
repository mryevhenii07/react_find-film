import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GetMovieDetails } from "../../services/Api";
import { IMAGE } from "../Pages/Home/Home";
import s from "./MovieDetailsPage.module.css";
import Cast from "../AboutFilm/Cast/Cast";
import Reviews from "../AboutFilm/Reviews/Reviews";

const MovieDetailsPage = () => {
  const { movieId, action } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    GetMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <ul>
      {movie && (
        <li key={movie.id}>
          <div className={s.wrapBlock}>
            <img
              src={`${IMAGE}${movie.poster_path}`}
              alt={movie.tagline}
              width="400"
              height="560"
            />
            <div className={s.blockRi}>
              <div className={s.blockRiLef}>
                <p className={s.blockInfo}>Film</p>
                <p className={s.blockInfoLeft}>Year</p>
                <p className={s.blockInfo}>Country</p>
                <p className={s.blockInfoLeft}>Genres</p>
                <p className={s.blockInfo}>Runtime</p>
                <p className={s.blockInfoLeft}>Status</p>
                <p className={s.blockInfo}>Vote_average</p>
              </div>
              <div>
                <h3 className={s.title}>{movie.title}</h3>
                <p className={s.info}> {movie.release_date}</p>
                <p className={s.title}>
                  {movie.production_countries
                    .map((country) => country.name)
                    .join(", ")}
                </p>
                <p className={s.info}>
                  {movie.genres.map((genre) => genre.name).join(", ")}
                </p>
                <p className={s.title}>{movie.runtime} min</p>
                <p className={s.info}>{movie.status}</p>
                <p className={s.title}>{movie.vote_average}</p>
              </div>
            </div>
          </div>
          <div className={s.overviewWrap}>
            <p className={s.overview}>
              <span className={s.span}>About film</span>
              <br />
              {movie.overview}
            </p>
            <div className={s.wrapCastReviews}>
              <div>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </div>
              <div>
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
              </div>
            </div>
          </div>
          {action === "cast" && <Cast movieId={movieId} />}
          {action === "reviews" && <Reviews movieId={movieId} />}
        </li>
      )}
    </ul>
  );
};

export default MovieDetailsPage;
