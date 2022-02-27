import RecipeList from "../../components/RecipeList";
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
// styles
import "./Home.css";

export default function Home() {
  const { user } = useAuthContext();
  const { documents: recipes } = useCollection("recipes", [
    "uid",
    "==",
    user.uid,
  ]);

  return (
    <div className="home">{recipes && <RecipeList recipes={recipes} />}</div>
  );
}
