import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// page components
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";

// styles
import "./App.css";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            {!user && <Route path="/login" element={<Login />} />}

            {!user && <Route path="/signup" element={<Signup />} />}
            {user && <Route path="*" element={<Navigate to="/" />} />}

            <Route path="/create" element={<Create />} />

            <Route path="/search" element={<Search />} />

            <Route path="recipe" element={<Recipe />} />

            {user && <Route path="/" element={<Home />} />}
            {!user && <Route path="*" element={<Navigate to="/login" />} />}
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
