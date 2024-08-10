const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[65vh] rounded-3xl"
        style={{
          backgroundImage: "url(https://i.ibb.co/Yp4B73S/banner.png)",
        }}
      >
        <div className="hero-content text-center text-neutral-content ">
          <div className="max-w-3xl space-y-8">
            <h1 className="mb-5 text-3xl lg:text-5xl font-bold leading-relaxed lg:leading-[70px]">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5 lg:leading-normal leading-7">
              Immerse yourself in a world of culinary excellence with our
              meticulously curated recipe collection. From timeless classics to
              innovative creations, our diverse array of dishes caters to every
              palate. Start your culinary journey with us today.
            </p>
            <div className="flex flex-col lg:flex-row gap-5 justify-center">
              <button className="btn bg-[#0BE58A] border-none rounded-3xl text-lg font-semibold px-7">
                Explore Now
              </button>
              <button className="btn bg-transparent text-white rounded-3xl text-lg font-semibold px-7">
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
