import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import recipes from "./data";
import { Recipe } from "./types";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import Favorites from "./components/Favorites";
import "./App.css";

const title: string = "Recipe Book";

//Create context for favorite recipes
export const FavoritesContext = React.createContext<{
  favorites: Recipe[];
  handleFavorite?: (recipe: Recipe) => void;
}>({
  favorites: [],
  handleFavorite: () => { },
});

const App: React.FC = () => {
  //Read favorites from context
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  const handleFavorite = (recipe: Recipe) => {
    // Check if the recipe is already in favorites
    const isFavorite = favorites.some((fav) => fav.id === recipe.id);
    if (isFavorite) {
      // Remove from favorites
      setFavorites((prevFavorites) =>
        prevFavorites.filter((fav) => fav.id !== recipe.id)
      );
    } else {
      // Add to favorites
      setFavorites((prevFavorites) => [...prevFavorites, recipe]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, handleFavorite }}>
      <div className="App">
        <h8k-navbar header={title}></h8k-navbar>
        <Router>
          <div className="app">
            <header>
              <nav data-testid="navbar">
                <Link to="/">Home</Link>
                <Link to="/favorites" >Favorites</Link>
              </nav>
            </header>
            <Routes>
              <Route path="/" element={<RecipeList />} />
              <Route path="/favorites" element={<Favorites recipes={favorites} />} />
              <Route path="/recipe/:id" element={<RecipeDetails />} />
            </Routes>
          </div>
        </Router>
      </div>
    </FavoritesContext.Provider>
  );
};

export default App;
