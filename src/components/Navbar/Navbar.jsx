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
          <div className="relative">
            <button className="btn btn-ghost btn-circle absolute lg:block hidden pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered rounded-3xl w-24 md:w-auto hidden lg:block pl-11"
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
