import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = () => {
  return (
    <div className="card bg-base-100 border">
      <figure className="px-10 pt-10">
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-3xl font-bold">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="divider"></div>
        <div>
          <h3>Ingedients:</h3>
          <ul className="list-disc list-inside">
            <li className="ml-4">Cookie</li>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="flex items-center gap-2">
          <IoTimeOutline />
          <p>30 Minutes</p>
          <AiOutlineFire />
          <p>600 Calories</p>
        </div>
        <div className="card-actions mt-4">
          <button className="btn bg-[#0BE58A]">Want to Cook</button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
