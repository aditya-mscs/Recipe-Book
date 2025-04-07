import React, { useContext } from "react";
import RecipeCard from "./RecipeCard";
import { Recipe } from "../types";
import { FavoritesContext } from "../App";

interface FavoritesProps {
  recipes: Recipe[];
}

const Favorites: React.FC<FavoritesProps> = ({ recipes }) => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="text-center">
      <h2>Your Favorites</h2>
        {favorites.length === 0 && (
          <p data-testid="no-favorites">No favorites yet!</p>
        )}
        {favorites.length > 0 && (
          <div className="recipe-list" data-testid="favorites-list">
            {favorites.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
    </div>
  );
};

export default Favorites;
