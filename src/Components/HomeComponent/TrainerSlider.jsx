"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Navigation } from "swiper/modules";

const TrainerSlider = () => {
  const classes = [
    {
      title: "Body Combat",
      image: "https://i.ibb.co.com/SNp16v4/coxbazar.jpg",
      time: "6 PM - 8 PM",
      description:
        "BodyCombat is the empowering cardio workout where you are totally unleashed. This fiercely energetic program.",
    },
    {
      title: "Yoga Fitness",
      image: "/images/yoga-fitness.jpg",
      time: "10 AM - 11 AM",
      description:
        "Whether you’re a regular yoga guru or just starting out, Fitness First Yoga helps you build strength and flexibility.",
    },
    {
      title: "Zumba Fitness",
      image: "/images/zumba-fitness.jpg",
      time: "4 PM - 6 PM",
      description:
        "This is the activity that everyone's been talking about. Fun, hypnotic, and easy-to-follow dance routines!",
    },
    {
      title: "Pilates Training",
      image: "/images/pilates.jpg",
      time: "9 AM - 10 AM",
      description:
        "Pilates is great for improving posture, flexibility, and overall core strength. It's low-impact and suitable for all ages.",
    },
    {
      title: "HIIT Training",
      image: "/images/hiit.jpg",
      time: "7 PM - 8 PM",
      description:
        "HIIT Training pushes your limits with short bursts of high-intensity workouts followed by recovery periods.",
    },
  ];

  return (
    <div className="container flex flex-col lg:flex-row gap-2 items-center justify-center p-6">
      {/* Sidebar Content */}
      <div className="bg-red-500 text-white p-6 w-52 h-52 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-bold mb-4">TRAINERS</h2>
        <p className="text-sm mb-6">
        pilates, yoga, zumba
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="w-full lg:w-3/4 h-full ">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          className="mySwiper flex"
        >
          {/* Loop through classes array */}
          {classes.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex gap-5">
                <div className="w-96 h-52 border-2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="object-cover w-28"
                  />
                </div>
                <div className="text-left space-y-5 p-5 border">
                  <h3 className="text-lg font-bold my-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 ">
                    {item.description}
                  </p>
                </div>
              </div>
              {/* <div className="border rounded-lg shadow-lg">
                <div className="w-full overflow-hidden shadow-lg dark:bg-gray-800 flex items-center justify-center min-h-screen ">
                 
                  <Image
                    src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="avatar"
                    fill
                    className="object-cover"
                  />

                  
                  <div className="py-5 text-center">
                    <a
                      href="#"
                      className="block text-xl font-bold text-gray-800 dark:text-white"
                      tabIndex="0"
                      role="link"
                    >
                      John Doe
                    </a>
                    <span className="text-sm text-gray-700 dark:text-gray-200">
                      Software Engineer
                    </span>
                  </div>
                </div>
              </div> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrainerSlider;
