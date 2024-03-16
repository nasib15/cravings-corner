import Recipe from "../Recipe/Recipe";

const Recipes = () => {
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
      <div className="recipe-section-container flex">
        <div className="w-[65%] grid grid-cols-2 gap-6">
          <Recipe></Recipe>
          <Recipe></Recipe>
          <Recipe></Recipe>
          <Recipe></Recipe>
          <Recipe></Recipe>
          <Recipe></Recipe>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Recipes;
