const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Recipe</a>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Home</a>
          <a className="btn btn-ghost text-xl">Recipes</a>
          <a className="btn btn-ghost text-xl">About</a>
          <a className="btn btn-ghost text-xl">Search</a>
        </div>
        <div className="navbar-end gap-2">
          <div>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div>
            <div>
              <img
                className="w-[60px] rounded-full outline-none"
                src="https://i.ibb.co/P90Q71G/pro-pic.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
