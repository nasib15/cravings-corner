const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-3xl lg:text-3xl font-extrabold">
            Cravings Corner
          </a>
        </div>
        <div className="navbar-center lg:flex hidden">
          <a className="btn btn-ghost text-lg font-medium">Home</a>
          <a className="btn btn-ghost text-lg font-medium">Recipes</a>
          <a className="btn btn-ghost text-lg font-medium">About</a>
          <a className="btn btn-ghost text-lg font-medium">Search</a>
        </div>
        <div className="navbar-end gap-2">
          <div>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto hidden lg:block"
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
