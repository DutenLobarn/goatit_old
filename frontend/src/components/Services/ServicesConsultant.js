import React from "react";
import { Link } from "react-router-dom";
import HeroLaptop from "../../assets/mobile_and_web.png";
import HtmlLogo from "../../assets/html.png";
import CssLogo from "../../assets/css.png";
import TailwindLogo from "../../assets/Tailwind_CSS_Logo.png";
import SassLogo from "../../assets/sass.png";
import JSLogo from "../../assets/js.png";
import ReactLogo from "../../assets/react.png";
import ReduxLogo from "../../assets/redux.png";
import TypeScriptLogo from "../../assets/Typescript_logo_2020.png";
import NodeLogo from "../../assets/node.png";
import ExpressLogo from "../../assets/express.png";
import MongoDBLogo from "../../assets/mongodb.png";
import MongooseLogo from "../../assets/mongoose.png";
import FigmaLogo from "../../assets/figmalogo.png";
import StrapiLogo from "../../assets/Strapi.png";

export default function ServicesConsultant() {
  return (
    <div className="w-screen">
      <div className="flex flex-col items-center px-6 sm:px-12 lg:px-28 2xl:px-48">
        <img
          className="py-6 lg:h-[500px] lg:w-full"
          src={HeroLaptop}
          alt="Goat bg img"
        />
        <h2 className="mt-14 text-3xl font-semibold text-orange-500 text-center lg:text-4xl">
          Hire a Consultant
        </h2>
        <Link to="/contact">
          <button className="my-20 bg-fuchsia-900 text-white hover:bg-orange-600 rounded w-40 h-12 lg:text-2xl">
            Let´s Talk
          </button>
        </Link>
        <p className="text-lg text-fuchsia-900 bg-white rounded-3xl p-4 lg:py-12 lg:px-16 lg:text-2xl sm:mx-[85px]">
          Do u need extra manpower at your company?
          <br />
          <br />
          We can help u!
          <br />
          <br />
          We have experience in many different development technologies.
        </p>
      </div>

      <div
        id="carouselExampleControls"
        className="my-10 carousel slide relative carousel-dark h-full flex"
        data-bs-ride="carousel"
      >
        <div className="bg-white carousel-inner h-60 rounded-2xl relative w-4/6 mx-auto overflow-hidden self-center xl:w-80 lg:w-2/6 sm:w-3/6">
          <div className="mt-16 carousel-item active relative float-left w-full h-full">
            <img
              src={HtmlLogo}
              className="block mx-auto w-1/2 h-1/2 rounded-2xl lg:w-3/6 lg:mx-auto md:w-3/6 sm:w-3/6"
              alt="HtmlLogo"
            />
          </div>
          <div className="mt-12 carousel-item relative float-left w-full h-full">
            <img
              src={CssLogo}
              className="block mx-auto mt-5 w-2/5 h-3/6 rounded-2xl lg:w-3/6 lg:mx-auto md:w-3/6 sm:w-3/6"
              alt="CssLogo"
            />
          </div>
          <div className="mt-12 carousel-item relative float-left w-full h-full">
            <img
              src={TailwindLogo}
              className="block mx-auto w-2/3 h-3/5 rounded-2xl lg:w-3/5 lg:mx-auto md:w-4/6 sm:w-5/6"
              alt="TailwindLogo"
            />
            <p className="text-center text-2xl">Tailwind CSS</p>
          </div>
          <div className="mt-8 carousel-item relative float-left w-full h-full">
            <img
              src={SassLogo}
              className="block mx-auto mt-5 w-2/5 h-3/6 rounded-2xl lg:w-3/6 lg:mx-auto md:w-3/6 sm:w-3/6"
              alt="SassLogo"
            />
            <p className="text-center text-2xl mt-5">Sass</p>
          </div>
          <div className="mt-8 carousel-item relative float-left w-full h-full">
            <img
              src={JSLogo}
              className="block mx-auto mt-6 w-3/6 h-3/6 rounded-2xl lg:w-3/6 lg:mx-auto md:w-3/6 sm:w-3/6"
              alt="JSLogo"
            />
            <p className="text-center text-2xl mt-4">JavaScript</p>
          </div>
          <div className="mt-10 carousel-item relative float-left w-full h-full">
            <img
              src={ReactLogo}
              className="block mx-auto w-4/6 h-4/6 rounded-2xl lg:w-3/6 lg:mx-auto md:w-3/6 sm:w-3/6"
              alt="ReactLogo"
            />
            <p className="text-center text-2xl -mt-2">React & React Native</p>
          </div>
          <div className="mt-8 carousel-item relative float-left w-full h-full">
            <img
              src={ReduxLogo}
              className="block mx-auto w-3/6 h-3/6 mt-5 rounded-2xl lg:w-3/6 lg:mx-auto md:w-3/6 sm:w-3/6"
              alt="ReduxLogo"
            />
            <p className="text-center text-2xl mt-5">Redux</p>
          </div>
          <div className="mt-8 carousel-item relative float-left w-full h-full">
            <img
              src={TypeScriptLogo}
              className="block mx-auto w-3/6 h-3/6 mt-6 rounded-2xl lg:w-3/6 md:w-3/6 sm:w-4/6"
              alt="TypeScriptLogo"
            />
            <p className="text-center text-2xl mt-4">TypeScript</p>
          </div>
          <div className="mt-10 carousel-item relative float-left w-full h-full">
            <img
              src={NodeLogo}
              className="block mx-auto w-2/4 h-3/5 mt-6 rounded-2xl lg:w-3/6 md:w-3/6 sm:w-4/6"
              alt="NodeLogo"
            />
          </div>
          <div className="mt-8 carousel-item relative float-left w-full h-full">
            <img
              src={ExpressLogo}
              className="block mx-auto w-3/5 h-3/6 mt-6 rounded-2xl lg:w-3/6 md:w-3/6 sm:w-4/6"
              alt="ExpressLogo"
            />
          </div>
          <div className="mt-10 carousel-item relative float-left w-full h-full">
            <img
              src={MongoDBLogo}
              className="block mx-auto w-2/3 h-3/4 mt- rounded-2xl lg:w-3/6 md:w-3/6 sm:w-4/6"
              alt="Mongoose Logo"
            />
          </div>
          <div className="mt-8 carousel-item relative float-left w-full h-full">
            <img
              src={MongooseLogo}
              className="block mx-auto w-2/3 h-5/6 rounded-2xl lg:w-3/6 md:w-3/6 sm:w-4/6"
              alt="MongooseLogo"
            />
          </div>
          <div className="mt-8 carousel-item relative float-left w-full h-full">
            <img
              src={FigmaLogo}
              className="block mx-auto w-2/3 mt-2 rounded-2xl lg:w-3/6 md:w-3/6 sm:w-4/6"
              alt="FigmaLogo"
            />
            <p className="text-center text-2xl -mt-3">Figma</p>
          </div>
          <div className="mt-10 carousel-item relative float-left w-full h-full">
            <img
              src={StrapiLogo}
              className="block mx-auto w-6/12 mt-4 rounded-2xl lg:w-3/6 md:w-3/6 sm:w-4/6"
              alt="StrapiLogo"
            />
            <p className="text-center text-2xl mt-3">Strapi</p>
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
