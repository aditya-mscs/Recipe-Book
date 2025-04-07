import { Recipe } from "./types";
const recipes: Recipe[] = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    image: "/images/spaghetti.jpg",
    description: "A classic Italian pasta dish.",
    ingredients: ["Spaghetti", "Eggs", "Parmesan cheese", "Guanciale", "Black pepper"],
    instructions: "Cook spaghetti. In a separate bowl, mix eggs and cheese. Combine with pasta.",
  },
  {
    id: 2,
    name: "Caprese Salad",
    image: "/images/caprese.jpg",
    description: "A fresh salad with tomatoes, mozzarella, and basil.",
    ingredients: ["Tomatoes", "Mozzarella cheese", "Fresh basil", "Olive oil", "Balsamic vinegar"],
    instructions: "Layer tomatoes and mozzarella, sprinkle with basil, and drizzle with olive oil.",
  },
  {
    id: 3,
    name: "Chicken Tikka Masala",
    image: "/images/chicken-tikka.jpg",
    description: "A creamy and spicy Indian dish.",
    ingredients: ["Chicken", "Yogurt", "Tomato sauce", "Spices", "Cilantro"],
    instructions: "Marinate chicken in yogurt. Cook with spices and tomato sauce.",
  },
  {
    id: 4,
    name: "Vegetable Stir Fry",
    image: "/images/vegetable-stir-fry.jpg",
    description: "A quick and healthy vegetable dish.",
    ingredients: ["Mixed vegetables", "Soy sauce", "Garlic", "Ginger"],
    instructions: "Stir fry vegetables with garlic and ginger. Add soy sauce to taste.",
  },
  {
    id: 5,
    name: "Beef Tacos",
    image: "/images/beef-tacos.jpg",
    description: "Delicious tacos with seasoned beef.",
    ingredients: ["Ground beef", "Taco shells", "Lettuce", "Cheese", "Salsa"],
    instructions: "Cook beef with taco seasoning. Serve in taco shells with toppings.",
  },
  {
    id: 6,
    name: "Pancakes",
    image: "/images/pancakes.jpg",
    description: "Fluffy pancakes for breakfast.",
    ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Baking powder"],
    instructions: "Mix ingredients and cook on a griddle until golden brown.",
  },
  {
    id: 7,
    name: "Margarita Pizza",
    image: "/images/margarita-pizza.jpg",
    description: "A simple yet delicious pizza with mozzarella and basil.",
    ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella cheese", "Fresh basil", "Olive oil"],
    instructions: "Preheat oven. Spread tomato sauce on dough, add cheese and basil, and bake.",
  },
  {
    id: 8,
    name: "Greek Salad",
    image: "/images/greek-salad.jpg",
    description: "A refreshing salad with cucumbers, olives, and feta cheese.",
    ingredients: ["Cucumbers", "Tomatoes", "Red onion", "Olives", "Feta cheese", "Olive oil"],
    instructions:
      "Chop all vegetables and mix with feta cheese and olives. Drizzle with olive oil.",
  },
  {
    id: 9,
    name: "Lasagna",
    image: "/images/lasagna.jpg",
    description: "Layers of pasta, cheese, and tomato sauce.",
    ingredients: [
      "Lasagna noodles",
      "Ricotta cheese",
      "Ground beef",
      "Tomato sauce",
      "Mozzarella cheese",
    ],
    instructions: "Layer pasta, cheese, and sauce, and bake until bubbly and golden.",
  },
  {
    id: 10,
    name: "Poke Bowl",
    image: "/images/poke-bowl.jpg",
    description: "A Hawaiian-inspired bowl with fresh fish, rice, and vegetables.",
    ingredients: ["Sushi rice", "Tuna", "Avocado", "Cucumber", "Soy sauce", "Sesame seeds"],
    instructions:
      "Assemble the rice, fish, and vegetables in a bowl. Drizzle with soy sauce and sprinkle sesame seeds.",
  },
  {
    id: 11,
    name: "Quinoa Salad",
    image: "/images/quinoa-salad.jpg",
    description: "A light, protein-packed salad with quinoa and vegetables.",
    ingredients: ["Quinoa", "Cucumber", "Tomato", "Red onion", "Olive oil", "Lemon juice"],
    instructions:
      "Cook quinoa and let it cool. Mix with vegetables and drizzle with olive oil and lemon juice.",
  },
  {
    id: 12,
    name: "Grilled Cheese Sandwich",
    image: "/images/grilled-cheese.jpg",
    description: "A classic comfort food with melted cheese and crispy bread.",
    ingredients: ["Bread", "Cheese", "Butter"],
    instructions: "Butter the bread, place cheese in between, and grill until golden brown.",
  },
  {
    id: 13,
    name: "Avocado Toast",
    image: "/images/avocado-toast.jpg",
    description: "Simple toast topped with creamy avocado and spices.",
    ingredients: ["Bread", "Avocado", "Lemon juice", "Chili flakes", "Olive oil"],
    instructions:
      "Toast the bread, mash avocado with lemon juice and chili flakes, and spread on toast.",
  },
  {
    id: 14,
    name: "Chicken Caesar Salad",
    image: "/images/chicken-caesar.jpg",
    description: "A hearty salad with grilled chicken and Caesar dressing.",
    ingredients: [
      "Chicken breast",
      "Romaine lettuce",
      "Parmesan cheese",
      "Caesar dressing",
      "Croutons",
    ],
    instructions:
      "Grill chicken and slice. Toss lettuce with Caesar dressing, chicken, cheese, and croutons.",
  },
  {
    id: 15,
    name: "Vegetable Soup",
    image: "/images/vegetable-soup.jpg",
    description: "A warm, hearty soup with mixed vegetables.",
    ingredients: ["Carrots", "Celery", "Potatoes", "Onions", "Vegetable broth", "Tomatoes"],
    instructions: "Chop vegetables and simmer in vegetable broth until tender.",
  },
  {
    id: 16,
    name: "Chocolate Cake",
    image: "/images/chocolate-cake.jpg",
    description: "A rich and moist chocolate cake.",
    ingredients: [
      "Flour",
      "Cocoa powder",
      "Sugar",
      "Eggs",
      "Butter",
      "Baking powder",
      "Vanilla extract",
    ],
    instructions:
      "Mix ingredients, pour into a cake tin, and bake until done. Frost with chocolate icing.",
  }
];

export default recipes;
