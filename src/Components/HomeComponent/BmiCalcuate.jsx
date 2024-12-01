import React from "react";

const BmiCalcuate = () => {
  return (
    <div>
      <div
        className="hero min-h-screen bg-cover bg-right"
        fill
        style={{
          backgroundImage: `url('https://i.ibb.co.com/g6f9vG5/banner-8.jpg')`,
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="text-neutral-content text-left">
          <div className="text-white w-1/2">
            <h1 className="mb-5 text-5xl font-bold">
              Let’s Calculate Your BMI
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>

          <form className="">
            <div className="form-control">
              <div>
                <input
                  type="text"
                  placeholder="Weight / Kg"
                  className="w-40 px-4 py-2 text-white bg-[#121212] border border-gray-600 rounded-md focus:outline-none mr-5"
                />
                <input
                  type="text"
                  placeholder="Height / cm"
                  className="w-40 px-4 py-2 text-white bg-[#121212] border border-gray-600 rounded-md focus:outline-none"
                />
              </div>
              <input
                type="submit"
                value="Calculate"
                className="mt-5 w-40 px-4 py-2 text-white bg-[#121212] border border-gray-600 hover:bg-red-500 focus:outline-none transition-all duration-300 ease-in-out delay-200 cursor-pointer"
              />
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default BmiCalcuate;
