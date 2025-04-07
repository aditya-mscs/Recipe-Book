import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Recipe } from "../types";
import { FavoritesContext } from "../App";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const { favorites, handleFavorite } = useContext(FavoritesContext);
  const handleAddRemoveFavorites = () => {
    handleFavorite?.(recipe);
  };

  return (
    <div className="recipe-card layout-column justify-content-between" data-testid="recipe-card">
      <h4 className="my-0">{recipe?.name}</h4>
      <p>{recipe?.description}</p>
      <div className="layout-row align-items-center">
        <button type="button" onClick={handleAddRemoveFavorites} data-id={recipe?.id}>
          {favorites.some((fav) => fav.id === recipe.id)
            ? "Remove from Favorites"
            : "Add to Favorites"}
        </button>
        <Link to={`/recipe/${recipe?.id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default RecipeCard;
