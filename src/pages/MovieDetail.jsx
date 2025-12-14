import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { FaStar, FaArrowLeft, FaCalendarAlt } from "react-icons/fa";
import "./MovieDetail.css";

const API_KEY = import.meta.env.VITE_API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/original";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetail = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=tr-TR`
        );
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieDetail();
  }, [id]);

  if (!movie) return <div className="loading">Yükleniyor...</div>;

  return (
    <div
      className="detail-container"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), #141414), url(${IMG_URL + movie.backdrop_path})`,
      }}
    >
      <div className="content-wrapper">
        <Link to="/" className="back-btn"><FaArrowLeft /> Geri Dön</Link>
        
        <div className="detail-content">
          <div className="detail-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          </div>
          
          <div className="detail-info">
            <h1 className="movie-title">{movie.title}</h1>
            <div className="meta-data">
              <span className="rating"><FaStar color="#e50914"/> {movie.vote_average.toFixed(1)}</span>
              <span className="date"><FaCalendarAlt /> {movie.release_date.split("-")[0]}</span>
              <span className="duration">{movie.runtime} dk</span>
            </div>
            
            <div className="genres">
              {movie.genres.map((genre) => (
                <span key={genre.id} className="genre-tag">{genre.name}</span>
              ))}
            </div>

            <p className="overview">{movie.overview}</p>
            
            {movie.homepage && (
              <a href={movie.homepage} target="_blank" className="watch-btn">Fragmanı İzle / Siteye Git</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;