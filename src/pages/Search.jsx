import { useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";
import "./Search.css";

const API_KEY = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=tr-TR`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Film ara..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Ara
        </button>
      </form>

      <div className="movies-grid">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <h2 className="no-result">Aradığınız filmi yazın...</h2>
        )}
      </div>
    </div>
  );
};

export default Search;