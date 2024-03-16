/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import Cooking from "./../Cooking/Cooking";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("./recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="my-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Our Recipes</h2>
        <p className="opacity-80 mt-6 mb-12">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.
        </p>
      </div>
      <div className="recipe-section-container flex gap-6">
        <div className="w-[65%] grid grid-cols-2 gap-6">
          {recipes.map((recipe, index) => (
            <Recipe
              key={index}
              image={recipe.image}
              recipe_name={recipe.recipe_name}
              description={recipe.description}
              ingredients={recipe.ingredients}
              prep_time={recipe.prep_time}
              calories={recipe.calories}
            ></Recipe>
          ))}
        </div>
        <div className="w-[35%]">
          <Cooking></Cooking>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
