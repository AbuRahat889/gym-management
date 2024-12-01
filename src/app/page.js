"use client";
import Image from "next/image";
import Banner from "../Components/HomeComponent/Banner";
import PopulerClass from "../Components/HomeComponent/PopulerClass";
import TrainerSlider from "../Components/HomeComponent/TrainerSlider";
import Schedule from "../Components/HomeComponent/Schedule";
import BmiCalcuate from "../Components/HomeComponent/BmiCalcuate";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <div>
      <ParallaxProvider>
        <Banner />
        <PopulerClass />
        <TrainerSlider />
        <BmiCalcuate />
        <Schedule />
      </ParallaxProvider>
    </div>
  );
}
