import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <BiCameraMovie /> CineVerse
        </Link>
        <Link to="/search" className="search-btn">
          <BiSearchAlt2 /> Arama Yap
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;