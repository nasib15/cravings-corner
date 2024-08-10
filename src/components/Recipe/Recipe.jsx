/* eslint-disable react/prop-types */
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({
  recipe,
  image,
  recipe_name,
  description,
  ingredients,
  prep_time,
  calories,
  handleCooking,
}) => {
  return (
    <div className="card bg-base-100 border">
      <figure className="px-10 pt-10">
        <img src={image} className="rounded-xl w-full h-60" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-semibold">{recipe_name}</h2>
        <p className="opacity-70 text-base">{description}</p>
        <div className="divider"></div>
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Ingedients: {ingredients.length}
          </h3>
          {ingredients.map((ingredient, index) => (
            <ul key={index} className="list-disc list-inside">
              <li className="ml-4 opacity-70">{ingredient}</li>
            </ul>
          ))}
        </div>
        <div className="divider"></div>
        <div className="flex items-center gap-2">
          <IoTimeOutline className="opacity-80" />
          <p className="opacity-80">{prep_time}</p>
          <AiOutlineFire className="opacity-80" />
          <p className="opacity-80">{calories} Calories</p>
        </div>
        <div className="card-actions mt-4">
          <button
            onClick={() => handleCooking(recipe)}
            className="btn bg-[#0BE58A] rounded-3xl px-7 font-semibold text-base border-none"
          >
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
