import { Link } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

// styles
import "./RecipeList.css";

export default function RecipeList({ recipes }) {
  const handleClick = async (id) => {
    const ref = doc(db, "recipes", id);
    await deleteDoc(ref);
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h3 onClick={() => handleClick(recipe.id)}>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  );
}
