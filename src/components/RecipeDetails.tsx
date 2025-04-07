import React from "react";
import { useParams, Link } from "react-router-dom";
import recipes from "../data";
import { Recipe } from "../types";

const RecipeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const recipeId = id ? parseInt(id) : 0;
  const recipe = recipes.find((recipe) => recipe.id === recipeId);
  console.log(recipe)

  return (
    <div className="layout-column align-items-center" data-testid="recipe-details">
      <h3>{recipe?.name}</h3>
      <h4 className="my-0">Ingredients:</h4>
      <ul>
        {recipe?.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h4 className="mb-0">Instructions:</h4>
      <p>{recipe?.instructions}</p>
      <Link to="/">Back to Recipes</Link>
    </div>
  );
};

export default RecipeDetails;
