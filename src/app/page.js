"use client";
import Image from "next/image";
import Banner from "../Components/HomeComponent/Banner";
import PopulerClass from "../Components/HomeComponent/PopulerClass";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <div>
      <ParallaxProvider>
        <Banner />
        <PopulerClass />
      </ParallaxProvider >
    </div>
  );
}
