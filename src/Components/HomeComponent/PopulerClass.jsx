"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Navigation } from "swiper/modules";

const PopulerClass = () => {
  const classes = [
    {
      title: "Body Combat",
      image: "https://i.ibb.co.com/VghCSjB/slider2.jpg",
      time: "6 PM - 8 PM",
      description:
        "BodyCombat is the empowering cardio where you are totally unleashed. This fiercely energetic program.",
    },
    {
      title: "Yoga Fitness",
      image: "https://i.ibb.co.com/k1rhN72/slider1.jpg",
      time: "10 AM - 11 AM",
      description:
        "Whether you’re a regular yoga guru or just starting out, Fitness First Yoga helps you build strength and flexibility.",
    },
    {
      title: "Zumba Fitness",
      image: "https://i.ibb.co.com/p1PmsH1/slider3.jpg",
      time: "4 PM - 6 PM",
      description:
        "This is the activity that everyone's been talking about. Fun, hypnotic, and easy-to-follow dance routines!",
    },
    {
      title: "Pilates Training",
      image: "https://i.ibb.co.com/k1rhN72/slider1.jpg",
      time: "9 AM - 10 AM",
      description:
        "Pilates is great for improving posture, flexibility, and overall core strength. It's low-impact and suitable for all ages.",
    },
    {
      title: "HIIT Training",
      image: "https://i.ibb.co.com/VghCSjB/slider2.jpg",
      time: "7 PM - 8 PM",
      description:
        "HIIT Training pushes your limits with short bursts of high-intensity workouts followed by recovery periods.",
    },
  ];

  return (
    <div className="bg-[#e9e9e9]">
      <div className="container m-auto flex flex-col lg:flex-row gap-2 items-center justify-center p-6 h-[400px] mt-24 lg:mt-0 ">
      {/* Sidebar Content */}
      <div className="bg-black text-white p-6 h-[350px] w-full lg:w-52 shadow-lg ">
        <h2 className="text-2xl font-bold mb-4">Popular Classes</h2>
        <p className="text-sm mb-6">
          Why not give one of these popular classes a look?
        </p>
        <div className="flex gap-2">
          <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
            &lt;
          </button>
          <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
            &gt;
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="w-full lg:w-3/4 h-full ">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {/* Loop through classes array */}
          {classes.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden ">
                {/* Class Image */}
                <div className="relative w-full h-52">
                  <Image
                  src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  {/* Time Overlay */}
                  <span className="absolute -bottom-3 left-20 bg-red-500 text-white text-sm px-3 py-1 rounded">
                    {item.time}
                  </span>
                </div>

                {/* Class Details */}
                <div className="p-5 mt-1">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </div>
  );
};

export default PopulerClass;
