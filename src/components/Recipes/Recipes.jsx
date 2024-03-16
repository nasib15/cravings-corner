/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import Cooking from "./../Cooking/Cooking";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  const [cookings, setCookings] = useState([]);

  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    fetch("./recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleCooking = (recipe) => {
    const isExist = cookings.find(
      (cooking) => cooking.recipe_id === recipe.recipe_id
    );
    if (!isExist) {
      const newCookings = [...cookings, recipe];
      setCookings(newCookings);
    } else {
      toast.warning("Already added to cookings");
    }
  };

  const handleCurrentlyCooking = (cooking, recipe_id) => {
    const isExist = currentlyCooking.find(
      (currentCooking) => cooking.recipe_id === currentCooking.recipe_id
    );

    setCookings(cookings.filter((cooking) => cooking.recipe_id !== recipe_id));

    if (!isExist) {
      const newCurrentlyCookings = [...currentlyCooking, cooking];
      setCurrentlyCooking(newCurrentlyCookings);
    }
    setTotalTime(totalTime + parseInt(cooking.prep_time.split(" ")[0]));
    setTotalCalories(totalCalories + cooking.calories);
  };

  // console.log(totalTime);

  return (
    <div className="my-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Our Recipes</h2>
        <p className="opacity-80 mt-6 mb-12">
          From appetizers to desserts, each recipe is expertly crafted with
          detailed instructions, ingredient lists, and pro tips to ensure
          culinary success. Discover inspiration for every meal and occasion
          with our diverse range of dishes catered to various tastes and dietary
          preferences.
        </p>
      </div>
      <div className="recipe-section-container flex gap-6">
        <div className="w-[65%] grid grid-cols-2 gap-6">
          {recipes.map((recipe, index) => (
            <Recipe
              key={index}
              recipe={recipe}
              recipeID={recipe.recipe_id}
              image={recipe.image}
              recipe_name={recipe.recipe_name}
              description={recipe.description}
              ingredients={recipe.ingredients}
              prep_time={recipe.prep_time}
              calories={recipe.calories}
              handleCooking={handleCooking}
            ></Recipe>
          ))}
        </div>
        <div className="w-[35%]">
          <Cooking
            cookings={cookings}
            handleCurrentlyCooking={handleCurrentlyCooking}
            currentlyCooking={currentlyCooking}
            totalTime={totalTime}
            totalCalories={totalCalories}
          ></Cooking>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Recipes;
