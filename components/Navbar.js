import { Link } from "react-router-dom";

// styles
import "./Navbar.css";
import Searchbar from "./Searchbar";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <Searchbar />
        <Link className="nav-buttons" to="/create">
          Create Recipe
        </Link>
        <Link className="nav-buttons" to="/signup">
          Signup
        </Link>
      </nav>
    </div>
  );
}
