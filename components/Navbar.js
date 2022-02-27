import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

// styles
import "./Navbar.css";
import Searchbar from "./Searchbar";

export default function Navbar() {
  const { logout } = useLogout();

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

        <Link className="nav-buttons" to="/login">
          Login
        </Link>

        <Link className="nav-buttons" to="/signup">
          Signup
        </Link>
        <li className="nav-buttons" onClick={logout}>
          Logout
        </li>
      </nav>
    </div>
  );
}
