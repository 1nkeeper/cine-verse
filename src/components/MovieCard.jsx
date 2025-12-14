import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img src={IMG_URL + movie.poster_path} alt={movie.title} />
        ) : (
          <div className="no-image">Resim Yok</div>
        )}
        <div className="overlay">
          <Link to={`/movie/${movie.id}`} className="details-btn">İncele</Link>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span className={`tag ${movie.vote_average >= 7 ? "green" : "red"}`}>
            <FaStar /> {movie.vote_average.toFixed(1)}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;