import React from "react";
import { Link } from "react-router-dom";
import SystemHero from "../../assets/systemHero.png";
import NodeLogo from "../../assets/node.png";
import ExpressLogo from "../../assets/express.png";
import MongoDBLogo from "../../assets/mongodb.png";
import MongooseLogo from "../../assets/mongoose.png";

export default function ServicesSystem() {
  return (
    <>
      <div className="MOBILE-MENU lg:hidden">
        <div className="flex flex-col items-center">
          <img
            className="py-6 md:h-[550px]"
            src={SystemHero}
            alt="SystemHero img"
          />
          <h2 className="mt-6 text-3xl font-semibold text-orange-500 text-center">
            SYSTEM DEVELOPMENT
          </h2>
          <p className="mt-6 font-semibold text-lg text-fuchsia-900 p-4">
            When you need a computer system that is custom made from the ground
            up to match your requirements - then we are the right agency for
            you.
            <br />
            <br />
            These systems can be something like internal administration systems,
            customer portals, web apps, mobile apps, CMS and much more.
            <br />
            <br />
            You have the possibility to fully customize and we make sure to
            deliver software that is completely dynamic to your requirements.
          </p>
          <Link to="/contact">
            <button className="my-10 bg-fuchsia-900 text-white hover:bg-orange-600 rounded w-40 h-12 md:text-xl">
              Let´s Talk
            </button>
          </Link>
        </div>

        <div
          id="carouselExampleControls"
          className="mt-10 mb-20 carousel slide relative carousel-dark h-full flex"
          data-bs-ride="carousel"
        >
          <div className="bg-white carousel-inner h-60 rounded-2xl relative w-4/6 mx-auto overflow-hidden self-center sm:w-3/6 md:w-2/5">
            <div className="mt-16 carousel-item active relative float-left w-full h-full">
              <img
                src={NodeLogo}
                className="block mx-auto w-1/2 h-1/2 rounded-2xl md:w-3/6 sm:w-3/6"
                alt="Node Logo"
              />
            </div>
            <div className="mt-9 carousel-item relative float-left w-full h-full">
              <img
                src={ExpressLogo}
                className="block mx-auto w-2/3 h-2/4 rounded-2xl mt-4 md:w-4/6 sm:w-5/6"
                alt="Express Logo"
              />
            </div>
            <div className="mt-10 carousel-item relative float-left w-full h-full">
              <img
                src={MongoDBLogo}
                className="block mx-auto w-2/3 h-3/4 rounded-2xl"
                alt="MongoDB Logo"
              />
            </div>
            <div className="mt-8 carousel-item relative float-left w-full h-full">
              <img
                src={MongooseLogo}
                className="block mx-auto w-2/3 h-5/6 rounded-2xl sm:w-3/5"
                alt="MongooseLogo"
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

      <div className="DESKTOP-MENU hidden lg:block">
        <div className="flex flex-row-reverse items-center h-screen mx-8 2xl:mx-20">
          <img
            className="w-2/4 h-3/4 mb-20 pl-4"
            src={SystemHero}
            alt="SystemHero img"
          />
          <div className="h-2/3">
            <h2 className="text-3xl font-semibold text-orange-500 text-start mb-8 2xl:mb-12 2xl:text-5xl">
              SYSTEM DEVELOPMENT
            </h2>
            <p className="font-semibold text-base text-fuchsia-900 2xl:text-xl">
              When you need a computer system that is custom made from the
              ground up to match your requirements - then we are the right
              agency for you.
              <br />
              <br />
              These systems can be something like internal administration
              systems, customer portals, web apps, mobile apps, CMS and much
              more.
              <br />
              <br />
              You have the possibility to fully customize and we make sure to
              deliver software that is completely dynamic to your requirements.
            </p>
            <Link to="/contact">
              <button className="my-10 bg-fuchsia-900 text-white rounded w-40 h-12 text-2xl 2xl:my-16 hover:bg-orange-600">
                Let´s Talk
              </button>
            </Link>
          </div>
        </div>

        <div
          id="carouselExampleControlsBigScreen"
          className="mb-20 carousel slide relative carousel-dark h-full flex"
          data-bs-ride="carousel"
        >
          <div className="bg-white carousel-inner h-60 rounded-2xl relative mx-auto overflow-hidden self-center w-80 ">
            <div className="mt-10 carousel-item active relative float-left w-full h-full">
              <img
                src={NodeLogo}
                className="block mx-auto w-2/4 h-3/5 mt-6 rounded-2xl"
                alt="Node Logo"
              />
            </div>
            <div className="mt-10 carousel-item relative float-left w-full h-full">
              <img
                src={ExpressLogo}
                className="block mx-auto w-3/5 h-3/6 mt-6 rounded-2xl"
                alt="Express Logo"
              />
            </div>
            <div className="mt-12 carousel-item relative float-left w-full h-full">
              <img
                src={MongoDBLogo}
                className="block mx-auto w-3/6 h-3/4 rounded-2xl"
                alt="MongoDB Logo"
              />
            </div>
            <div className="mt-8 carousel-item relative float-left w-full h-full">
              <img
                src={MongooseLogo}
                className="block mx-auto w-3/6 h-5/6 rounded-2xl"
                alt="MongooseLogo"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleControlsBigScreen"
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
            data-bs-target="#carouselExampleControlsBigScreen"
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
    </>
  );
}
