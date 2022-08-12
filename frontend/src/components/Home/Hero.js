import React from "react";
import { Link } from "react-router-dom";
import "tw-elements";
import HeroLaptop from "../../assets/hero1.png";
import HeroGuy from "../../assets/heroGuy.png";

console.log(window.location.href);

export default function Hero() {
  return (
    <div>
      <div className="h-[597px] md:h-[642px] sm:h-[630px]">
        <div
          id="carouselDarkVariant"
          className="carousel slide carousel-dark h-full lg:flex lg:flex-row-reverse"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner w-full overflow-hidden h-3/6 my-6 lg:h-full lg:w-5/6">
            <div className="carousel-item active float-left w-screen xl:mt-10 lg:w-full lg:mt-20 lg:ml-0 md:w-7/12 md:ml-40 sm:w-2/3 sm:ml-28">
              <img className="px-4 mt-12" src={HeroLaptop} alt="Goat bg img" />
            </div>
            <div className="carousel-item float-left w-screen 2xl:-mt-14 xl:-mt-2 lg:w-full lg:mt-10 lg:ml-0 md:w-7/12 md:ml-40 sm:w-2/3 sm:ml-28">
              <img src={HeroGuy} alt="Goat bg img" />
            </div>
          </div>
          <div className="h-2/5 flex flex-col justify-center items-center text-fuchsia-900 text-xl lg:h-full lg:w-3/5 lg:items-start lg:text-3xl lg:pl-16 xl:pl-32">
            <h1 className="text-orange-500 text-4xl font-bold tracking-widest lg:text-6xl">
              GOAT IT
            </h1>
            <p className="mt-6 mb-2">
              <b>CREATE, </b>
              <b>DESIGN </b>& <b>DEVELOP</b>
            </p>
            <p className="mb-12">
              <b>WEBSITES</b>, <b>APPS</b> & <b>SYSTEMS</b>
            </p>
            <Link to="/contact">
              <button className="bg-fuchsia-900 text-white hover:bg-orange-600 rounded w-40 h-12 lg:text-2xl">
                Let´s Talk
              </button>
            </Link>
          </div>
          {/* <div className="carousel-inner w-full overflow-hidden h-3/6 my-6 lg:h-4/5 lg:w-1/2 lg:my-auto">
            <div className="carousel-item active float-left w-screen lg:w-full lg:pr-32">
              <img className="px-4 mt-12" src={Hero1} alt="Goat bg img" />
            </div>
            <div className="carousel-item float-left w-screen lg:w-full lg:-mt-12 lg:pr-20">
              <img src={HeroGuy} alt="Goat bg img" />
            </div>
          </div>
          <div className="h-2/5 flex flex-col justify-center items-center text-fuchsia-900 text-xl lg:h-full lg:w-2/5 lg:items-start lg:text-3xl">
            <h1 className="text-orange-500 text-4xl font-bold tracking-widest lg:text-6xl">
              GOAT IT
            </h1>
            <p className="mt-6 mb-2">
              <b>CREATE, </b>
              <b>DESIGN </b>& <b>DEVELOP</b>
            </p>
            <p className="mb-12">
              <b>WEBSITES</b>, <b>APPS</b> & <b>SYSTEMS</b>
            </p>
            <button className="bg-fuchsia-900 text-white hover:bg-orange-600 rounded w-40 h-12 lg:text-2xl">
              <Link to="/contact">Let´s Talk</Link>
            </button>
          </div> */}
        </div>
        {/* <img
          className="w-screen h-1/2 px-4 my-6"
          src={Hero1}
          alt="Goat bg img"
        />
        <div
          className="w-screen h-2/5
        flex flex-col justify-center items-center text-fuchsia-900 text-xl"
        >
          <h1 className="text-orange-500 text-4xl font-bold tracking-widest">
            GOAT IT
          </h1>
          <p className="mt-2 mb-1">
            <b>CREATE, </b>
            <b>DESIGN </b>& <b>DEVELOP</b>
          </p>
          <p className="mb-8">
            <b>WEBSITES</b>, <b>APPS</b> & <b>SYSTEMS</b>
          </p>
          <button className="bg-fuchsia-900 text-white hover:bg-orange-600 rounded w-32 h-10">
            <Link to="/contact">Let´s Talk</Link>
          </button>
        </div> */}
      </div>
    </div>
  );
}
