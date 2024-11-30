"use client";
import Image from "next/image";
import Banner from "../Components/HomeComponent/Banner";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <div>
      <ParallaxProvider>
        <Banner />
      </ParallaxProvider>
    </div>
  );
}
