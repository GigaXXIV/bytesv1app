import NewRecipe from "app/components/Recipes/NewRecipe";
import RecipeForm from "app/components/Recipes/RecipeShell";
import RecipeLibrary from "app/components/Recipes/RecipeLibrary";
import React from "react";

// If user has no recipes, show FirstRecipe, else show RecipeLibrary.

const userRecipes = false;

const index = () => {
  return (
    <>
      {userRecipes ? <RecipeLibrary /> : <NewRecipe />}
      {/* <RecipeLibrary /> */}
      {/* <FirstRecipe /> */}
      {/* <RecipeForm /> */}
    </>
  );
};

export default index;
