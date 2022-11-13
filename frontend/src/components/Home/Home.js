import React from "react";
import Hero from "./Hero";
import HomeServices from "./HomeServices";
import HomeChooseUs from "./HomeChooseUs";
// import HomePortfolio from "./HomePortfolio";
// import HomeTestimonial from "./HomeTestimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeServices />
      <HomeChooseUs />
      {/* <HomePortfolio /> */}
      {/* <HomeTestimonial /> */}
    </div>
  );
}
