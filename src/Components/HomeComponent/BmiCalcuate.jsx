"use client";

import React from "react";

const BmiCalcuate = () => {
  const calculateBmi = (e) => {
    e.preventDefault();

    const form = e.target;
    const weight = parseFloat(document.getElementById("weight").value);
    const getHeight = parseFloat(document.getElementById("height").value);

    const height = getHeight * 0.3048;

    console.log(height);

    if (weight <= 0 || height <= 0) {
      document.getElementById("result").innerHTML =
        "Please enter valid weight and height values.";
      return;
    }

    const bmi = weight / (height * height);
    let category = "";

    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obesity";
    }

    document.getElementById("result").innerHTML = `
          Your BMI is <strong>${bmi.toFixed(
            2
          )}</strong>, and weight status is: <strong>${category}</strong>.
        `;
  };
  return (
    <div>
      <div
        className="hero min-h-screen bg-cover bg-right text-center md:text-left"
        fill
        style={{
          backgroundImage: `url('https://i.ibb.co.com/g6f9vG5/banner-8.jpg')`,
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="text-neutral-content text-center md:text-left p-10 lg:p-0 ">
          <div className="text-white w-full md:w-1/2">
            <h1 className="mb-5 text-5xl font-bold text-wrap">
              Let’s Calculate Your BMI
            </h1>
            <p className="mb-5 text-wrap">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>

          <form
            onSubmit={calculateBmi}
            className="mt-5 flex justify-center flex-col md:flex-row md:justify-start"
          >
            <div className="form-control flex flex-col justify-around lg:item-start gap-5">
              <div>
                <input
                  id="weight"
                  neme="weight"
                  type="number"
                  placeholder="Weight / Kg"
                  className="w-40 px-4 py-2 text-white bg-[#121212] border border-gray-600 rounded-md focus:outline-none"
                />
                <input
                  type="text"
                  id="height"
                  name="height"
                  placeholder="Height / Feet"
                  className="mt-5 lg:mt-0 w-40 px-4 py-2 text-white bg-[#121212] border border-gray-600 rounded-md focus:outline-none"
                />
              </div>
              <input
                type="submit"
                value="Calculate"
                className="m-auto lg:m-0 w-40 px-4 py-2 text-white bg-[#121212] border border-gray-600 hover:bg-red-500 focus:outline-none transition-all duration-300 ease-in-out delay-200 cursor-pointer "
              />
            </div>
          </form>
          <div
            id="result"
            style={{
              marginTop: "20px",
              fontSize: "20px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BmiCalcuate;
