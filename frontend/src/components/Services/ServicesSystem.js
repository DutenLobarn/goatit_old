import React from "react";
import { Link } from "react-router-dom";
import HeroLaptop from "../../assets/mobile_and_web.png";
import NodeLogo from "../../assets/node.png";
import ExpressLogo from "../../assets/express.png";
import MongoDBLogo from "../../assets/mongodb.png";
import MongooseLogo from "../../assets/mongoose.png";

export default function ServicesSystem() {
  return (
    <div className="w-screen">
      <div className="flex flex-col items-center px-6 sm:px-12 lg:px-28 2xl:px-48">
        <img
          className="py-6 lg:h-[500px] lg:w-full"
          src={HeroLaptop}
          alt="Goat bg img"
        />
        <h2 className="mt-12 text-3xl font-semibold text-orange-500 text-center lg:text-4xl">
          System Development
        </h2>
        <Link to="/contact">
          <button className="mt-24 bg-fuchsia-900 text-white hover:bg-orange-600 rounded w-40 h-12 lg:text-2xl">
            Let´s Talk
          </button>
        </Link>
        <p className="mt-20 text-lg text-fuchsia-900 bg-white rounded-3xl p-4 lg:py-12 lg:px-16 lg:text-2xl sm:mx-[85px]">
          When you need a computer system that is custom made from the ground up
          to match your requirements - then we are the right agency for you.
          <br />
          <br />
          These systems can be something like internal administration systems,
          customer portals, web apps, mobile apps, CMS and much more.
          <br />
          <br />
          You have the possibility to fully customize and we make sure to
          deliver software that is completely dynamic to your requirements.
        </p>
      </div>

      <div
        id="carouselExampleControls"
        className="my-10 carousel slide relative carousel-dark h-full flex"
        data-bs-ride="carousel"
      >
        <div className="bg-white carousel-inner h-60 rounded-2xl relative w-4/6 mx-auto overflow-hidden self-center xl:w-80 lg:w-2/6 sm:w-3/6">
          <div className="mt-14 carousel-item active relative float-left w-full h-full">
            <img
              src={NodeLogo}
              className="block mx-auto w-1/2 h-1/2 rounded-2xl lg:w-3/6 lg:mx-auto md:w-3/6 sm:w-3/6"
              alt="Node Logo"
            />
          </div>
          <div className="mt-9 carousel-item relative float-left w-full h-full">
            <img
              src={ExpressLogo}
              className="block mx-auto w-2/3 h-2/3 rounded-2xl lg:w-3/5 lg:mx-auto md:w-4/6 sm:w-5/6"
              alt="Express Logo"
            />
          </div>
          <div className="mt-9 carousel-item relative float-left w-full h-full">
            <img
              src={MongoDBLogo}
              className="block mx-auto w-2/3 h-2/3 rounded-2xl lg:w-3/5 lg:mx-auto md:w-4/6 sm:w-5/6"
              alt="MongoDB Logo"
            />
          </div>
          <div className="mt-8 carousel-item relative float-left w-full h-full">
            <img
              src={MongooseLogo}
              className="block mx-auto w-2/3 h-5/6 rounded-2xl lg:w-3/6 md:w-3/6 sm:w-4/6"
              alt="Mongoose Logo"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
