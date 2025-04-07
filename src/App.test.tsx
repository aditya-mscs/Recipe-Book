// @ts-nocheck
/* eslint-disable */
import React from "react";
import App from "./App";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import recipes, { Recipe } from "./data";

global.console.warn = jest.fn();

describe("Recipe book", () => {
  beforeEach((): void => {
    render(<App />);
  });

  afterEach((): void => {
    cleanup();
  });

  it("should display all the recipes with / route initially", () => {
    const recipeList = screen.getByTestId("recipe-list") as HTMLElement;
    expect(recipeList.children).toHaveLength(recipes.length);
    const recipeCards = screen.getAllByTestId("recipe-card");
    for (let i = 0; i < recipes.length; i++) {
      const recipe = recipes[i];
      const card = recipeCards[i] as HTMLElement;
      expect(card.children[0]).toHaveTextContent(recipe.name);
      expect(card.children[1]).toHaveTextContent(recipe.description);
      expect((card.children[2] as HTMLElement).children[0]).toHaveTextContent("Add to Favorites");
      expect((card.children[2] as HTMLElement).children[1]).toHaveTextContent("View Details");
    }
    expect(window.location.pathname).toBe("/");
  });

  it("should initially display an empty favorites page", () => {
    const navbar = screen.getByTestId("navbar") as HTMLElement;
    const navChildren = navbar.children;
    fireEvent.click(navChildren[1] as HTMLElement);
    expect(screen.queryByTestId("favorites-list")).not.toBeInTheDocument();
    expect(screen.getByTestId("no-favorites")).toHaveTextContent("No favorites yet!");
    expect(window.location.pathname).toBe("/favorites");
  });

  it("should navigate between nav items correctly", () => {
    const navbar = screen.getByTestId("navbar") as HTMLElement;
    const navChildren = navbar.children;
    fireEvent.click(navChildren[1] as HTMLElement);
    expect(window.location.pathname).toBe("/favorites");
    fireEvent.click(navChildren[0] as HTMLElement);
    expect(window.location.pathname).toBe("/");
  });

  it("should update the recipe list based on search input", () => {
    const navbar = screen.getByTestId("navbar") as HTMLElement;
    fireEvent.click(navbar.children[0] as HTMLElement);
    const searchInput = screen.getByTestId("search-input") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "Spaghetti" } });
    const filteredRecipes = recipes.filter((recipe: Recipe) =>
      recipe.name.toLowerCase().includes("spaghetti")
    );
    expect((screen.getByTestId("recipe-list") as HTMLElement).children).toHaveLength(
      filteredRecipes.length
    );
    filteredRecipes.forEach((recipe: Recipe) => {
      // Assuming the recipe cards retain their original order by id.
      const recipeCard = screen.getAllByTestId("recipe-card")[recipe.id - 1] as HTMLElement;
      expect(recipeCard.children[0]).toHaveTextContent(recipe.name);
    });
    expect(screen.queryByTestId("no-recipes-message")).not.toBeInTheDocument();
  });

  it("should display 'No recipes match your search.' when no recipes match the search query", () => {
    const navbar = screen.getByTestId("navbar") as HTMLElement;
    fireEvent.click(navbar.children[0] as HTMLElement);
    expect(screen.queryByTestId("no-recipes-message")).not.toBeInTheDocument();
    const searchInput = screen.getByTestId("search-input") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "abcd" } });
    expect(screen.getByTestId("no-recipes-message")).toHaveTextContent(
      "No recipes match your search."
    );
  });

  it("should add a recipe to favorites and display it on the favorites page", () => {
    const recipeToAdd = recipes[0];
    const recipeCard = screen.getAllByTestId("recipe-card")[recipeToAdd.id - 1] as HTMLElement;
    fireEvent.click((recipeCard.children[2] as HTMLElement).children[0] as HTMLElement);
    fireEvent.click(screen.getByText("Favorites"));
    const favoritesList = screen.getByTestId("favorites-list") as HTMLElement;
    expect(favoritesList.children).toHaveLength(1);
    expect((favoritesList.children[0] as HTMLElement).children[0]).toHaveTextContent(
      recipeToAdd.name
    );
    expect((favoritesList.children[0] as HTMLElement).children[1]).toHaveTextContent(
      recipeToAdd.description
    );
    expect(window.location.pathname).toBe("/favorites");
  });

  it("should remove the favorite recipe from the favorites page on clicking the button", () => {
    const navbar = screen.getByTestId("navbar") as HTMLElement;
    fireEvent.click(navbar.children[0] as HTMLElement);
    const recipeToAdd = recipes[0];
    const recipeCard = screen.getAllByTestId("recipe-card")[recipeToAdd.id - 1] as HTMLElement;
    fireEvent.click((recipeCard.children[2] as HTMLElement).children[0] as HTMLElement);
    fireEvent.click(screen.getByText("Favorites"));
    fireEvent.click(
      (screen.getAllByTestId("recipe-card")[recipeToAdd.id - 1] as HTMLElement).children[2]
        .children[0] as HTMLElement
    );
    expect(screen.queryByTestId("favorites-list")).not.toBeInTheDocument();
    expect(screen.getByTestId("no-favorites")).toHaveTextContent("No favorites yet!");
    expect(window.location.pathname).toBe("/favorites");
  });

  it("should change button text to 'Remove from Favorites' when clicked", () => {
    const navbar = screen.getByTestId("navbar") as HTMLElement;
    fireEvent.click(navbar.children[0] as HTMLElement);
    const recipeToAdd = recipes[3];
    const recipeCard = screen.getAllByTestId("recipe-card")[recipeToAdd.id - 1] as HTMLElement;
    const addToFavoritesButton = (recipeCard.children[2] as HTMLElement)
      .children[0] as HTMLElement;
    expect(addToFavoritesButton).toHaveTextContent("Add to Favorites");
    fireEvent.click(addToFavoritesButton);
    expect(addToFavoritesButton).toHaveTextContent("Remove from Favorites");
    fireEvent.click(addToFavoritesButton);
    expect(addToFavoritesButton).toHaveTextContent("Add to Favorites");
  });

  it("should navigate to recipe details when 'View Details' is clicked", () => {
    const navbar = screen.getByTestId("navbar") as HTMLElement;
    fireEvent.click(navbar.children[0] as HTMLElement);
    const recipeToView = recipes[2];
    const recipeCard = screen.getAllByTestId("recipe-card")[recipeToView.id - 1] as HTMLElement;
    fireEvent.click((recipeCard.children[2] as HTMLElement).children[1] as HTMLElement);
    const recipeDetails = screen.getByTestId("recipe-details") as HTMLElement;
    expect(recipeDetails.children[0]).toHaveTextContent(recipeToView.name);
    expect(recipeDetails.children[1]).toHaveTextContent("Ingredients");
    expect(recipeDetails.children[3]).toHaveTextContent("Instructions");
    expect(recipeDetails.children[4]).toHaveTextContent(recipeToView.instructions);
    const ingredientsList = recipeDetails.children[2] as HTMLElement;
    for (let i = 0; i < recipeToView.ingredients.length; i++) {
      expect(ingredientsList.children[i]).toHaveTextContent(recipeToView.ingredients[i]);
    }
    expect(window.location.pathname).toBe(`/recipe/${recipeToView.id}`);
  });

  it("should navigate back to the recipes list from the details page", () => {
    const navbar = screen.getByTestId("navbar") as HTMLElement;
    fireEvent.click(navbar.children[0] as HTMLElement);
    const recipeToView = recipes[0];
    const recipeCard = screen.getAllByTestId("recipe-card")[recipeToView.id - 1] as HTMLElement;
    fireEvent.click((recipeCard.children[2] as HTMLElement).children[1] as HTMLElement);
    const recipeDetails = screen.getByTestId("recipe-details") as HTMLElement;
    // Assuming the "Back to Recipes" link is the last child in recipeDetails
    fireEvent.click(recipeDetails.children[5] as HTMLElement);
    expect((screen.getByTestId("recipe-list") as HTMLElement).children).toHaveLength(recipes.length);
    expect(window.location.pathname).toBe("/");
  });
});
