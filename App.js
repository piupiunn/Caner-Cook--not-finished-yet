import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// page components
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

// styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" />} />

          <Route path="/create" element={<Create />} />

          <Route path="/search" element={<Search />} />

          <Route path="recipe" element={<Recipe />} />

          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
