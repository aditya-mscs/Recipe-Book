import React, { useState, ChangeEvent } from "react";
import RecipeCard from "./RecipeCard";
import { Recipe } from "../types";
import recipes from "../data";

const RecipeList: React.FC = () => {
  //import receipeList from "../data";
  const [receipeList, setRecipeList] = useState<Recipe[]>(recipes);
  const [searchTerm, setSearchTerm] = useState<string>("");
  console.log("receipeList", receipeList);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filteredRecipes = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(value.toLowerCase())
    );
    setRecipeList(filteredRecipes);
  };

  return (
    <div className="recipe-list-container">
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
        data-testid="search-input"
      />
      {receipeList.length === 0 && (
        <p className="text-center" data-testid="no-recipes-message">No recipes match your search.</p>
      )}
      {receipeList.length > 0 && (
        <div className="recipe-list" data-testid="recipe-list">
          {receipeList.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
