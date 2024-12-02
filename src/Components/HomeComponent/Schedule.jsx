"use client";


import Schedule from "../Schedule";

const WeeklyClassSchedule = () => {
  return (
    <div
      id="#schedule"
      className="relative bg-no-repeat bg-cover bg-right py-16 px-4 sm:px-6 lg:px-8 mt-10 "
      style={{
        backgroundImage: `url("https://i.ibb.co.com/8PrJgsm/schedule.png")`,
      }}
    >
      

      <div className="relative z-10 max-w-7xl mx-auto ">
        <div className="text-center">
          <div className="inline-block bg-red-500  font-bold text-sm uppercase py-2 px-4 relative">
            <span className="absolute inset-0 -z-10 bg-red-500 rotate-[-2deg] skew-x-[-10deg] text-white"></span>
            Time & Table
          </div>
          <h2 className="text-4xl font-extrabold mt-4">
            Weekly Class Schedule
          </h2>
          <p className="mt-2">
            Gymat an unknown printer took a galley of type and scrambled make a
            type specimen book.
          </p>
        </div>

        <Schedule />
      </div>
    </div>
  );
};

export default WeeklyClassSchedule;
