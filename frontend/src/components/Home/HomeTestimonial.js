import React from "react";
import Testimonials from "../../assets/Testimonials .png";

export default function HomeTestimonial() {
  return (
    <section className="h-1/2 flex flex-col items-center">
      {/* <h3 className="text-4xl md:text-6xl mt-10 text-orange-500 font-semibold">
        Testimonial
      </h3> */}
      <img
        src={Testimonials}
        alt="Testimonial bg img"
        className="w-full my-10 2xl:-my-10 xl:w-4/6 lg:my-0 lg:w-5/6 md:my-6"
      />
    </section>
  );
}

// h-screen w-5/6 mx-auto
