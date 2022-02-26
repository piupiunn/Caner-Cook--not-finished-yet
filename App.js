import { BrowserRouter, Route, Routes } from "react-router-dom";

// page components
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";

// styles
import "./App.css";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />

          <Route path="/create" element={<Create />} />

          <Route path="/search" element={<Search />} />

          <Route path="recipe" element={<Recipe />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
