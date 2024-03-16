const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[65vh] rounded-3xl"
        style={{
          backgroundImage: "url(https://i.ibb.co/Yp4B73S/banner.png)",
        }}
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-5xl font-bold leading-[60px]">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className="flex gap-5 justify-center">
              <button className="btn bg-[#0BE58A] border-none rounded-3xl">
                Explore Now
              </button>
              <button className="btn bg-transparent text-white rounded-3xl">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
