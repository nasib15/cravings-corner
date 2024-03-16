/* eslint-disable react/prop-types */
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({
  image,
  recipe_name,
  description,
  ingredients,
  prep_time,
  calories,
}) => {
  return (
    <div className="card bg-base-100 border">
      <figure className="px-10 pt-10">
        <img src={image} className="rounded-xl w-full h-80" />
      </figure>
      <div className="card-body">
        <h2 className="text-3xl font-bold">{recipe_name}</h2>
        <p>{description}</p>
        <div className="divider"></div>
        <div>
          <h3>Ingedients: {ingredients.length}</h3>
          {ingredients.map((ingredient, index) => (
            <ul key={index} className="list-disc list-inside">
              <li className="ml-4">{ingredient}</li>
            </ul>
          ))}
        </div>
        <div className="divider"></div>
        <div className="flex items-center gap-2">
          <IoTimeOutline />
          <p>{prep_time}</p>
          <AiOutlineFire />
          <p>{calories} Calories</p>
        </div>
        <div className="card-actions mt-4">
          <button className="btn bg-[#0BE58A]">Want to Cook</button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
