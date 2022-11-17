import React from "react";
import { Link } from "react-router-dom";
import ConsultantHero from "../../assets/ConsultantHero.png";
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
import { useTranslation } from "react-i18next";

export default function ServicesConsultant() {
  const { t } = useTranslation();
  return (
    <>
      <div className="MOBILE-MENU lg:hidden">
        <div className="flex flex-col items-center">
          <img
            className="py-6 sm:h-[550px] md:h-[550px]"
            src={ConsultantHero}
            alt="ConsultantHero img"
          />
          <h2 className="mt-6 text-3xl font-semibold text-orange-500 text-center">
            {t("services.consultant.title")}
          </h2>
          <p className="mt-6 font-semibold text-lg text-fuchsia-900 p-4 md:mx-8">
            {t("services.consultant.description")}
            <br />
            <br />
            {t("services.consultant.description2")}
            <br />
            <br />
            {t("services.consultant.description3")}
          </p>
          <Link to="/contact">
            <button className="my-10 bg-fuchsia-900 text-white hover:bg-orange-600 rounded w-40 h-12 md:text-xl">
              {t("services.consultant.contactUs")}
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
                src={HtmlLogo}
                className="block mx-auto w-1/2 h-1/2 rounded-2xl"
                alt="HtmlLogo"
              />
            </div>
            <div className="mt-16 carousel-item relative float-left w-full h-full">
              <img
                src={CssLogo}
                className="block mx-auto w-2/5 h-3/6 rounded-2xl"
                alt="CssLogo"
              />
            </div>
            <div className="mt-12 carousel-item relative float-left w-full h-full">
              <img
                src={TailwindLogo}
                className="block mx-auto w-2/3 h-3/5 rounded-2xl"
                alt="TailwindLogo"
              />
              <p className="text-center text-2xl">Tailwind CSS</p>
            </div>
            <div className="mt-8 carousel-item relative float-left w-full h-full">
              <img
                src={SassLogo}
                className="block mx-auto mt-5 w-2/5 h-3/6 rounded-2xl"
                alt="SassLogo"
              />
              <p className="text-center text-2xl mt-5">Sass</p>
            </div>
            <div className="mt-8 carousel-item relative float-left w-full h-full">
              <img
                src={JSLogo}
                className="block mx-auto mt-6 w-3/6 h-3/6 rounded-2xl"
                alt="JSLogo"
              />
              <p className="text-center text-2xl mt-4">JavaScript</p>
            </div>
            <div className="mt-10 carousel-item relative float-left w-full h-full">
              <img
                src={ReactLogo}
                className="block mx-auto w-4/6 h-4/6 rounded-2xl"
                alt="ReactLogo"
              />
              <p className="text-center text-2xl -mt-2">React & React Native</p>
            </div>
            <div className="mt-8 carousel-item relative float-left w-full h-full">
              <img
                src={ReduxLogo}
                className="block mx-auto w-3/6 h-3/6 mt-5 rounded-2xl"
                alt="ReduxLogo"
              />
              <p className="text-center text-2xl mt-5">Redux</p>
            </div>
            <div className="mt-8 carousel-item relative float-left w-full h-full">
              <img
                src={TypeScriptLogo}
                className="block mx-auto w-3/6 h-3/6 mt-6 rounded-2xl"
                alt="TypeScriptLogo"
              />
              <p className="text-center text-2xl mt-4">TypeScript</p>
            </div>
            <div className="mt-10 carousel-item relative float-left w-full h-full md:mt-12">
              <img
                src={NodeLogo}
                className="block mx-auto w-2/4 h-3/6 mt-6 rounded-2xl"
                alt="NodeLogo"
              />
            </div>
            <div className="mt-10 carousel-item relative float-left w-full h-full">
              <img
                src={ExpressLogo}
                className="block mx-auto w-3/5 h-3/6 mt-6 rounded-2xl"
                alt="ExpressLogo"
              />
            </div>
            <div className="mt-10 carousel-item relative float-left w-full h-full">
              <img
                src={MongoDBLogo}
                className="block mx-auto w-2/3 h-3/4 rounded-2xl"
                alt="Mongoose Logo"
              />
            </div>
            <div className="mt-8 carousel-item relative float-left w-full h-full">
              <img
                src={MongooseLogo}
                className="block mx-auto w-2/3 h-5/6 rounded-2xl sm:w-3/5"
                alt="MongooseLogo"
              />
            </div>
            <div className="mt-6 carousel-item relative float-left w-full h-full">
              <img
                src={FigmaLogo}
                className="block mx-auto w-2/3 mt-2 rounded-2xl sm:w-3/5 sm:mt-0 md:mt-2"
                alt="FigmaLogo"
              />
              <p className="text-center text-2xl -mt-3 sm:-mt-5">Figma</p>
            </div>
            <div className="mt-10 carousel-item relative float-left w-full h-full">
              <img
                src={StrapiLogo}
                className="block mx-auto w-6/12 mt-4 rounded-2xl sm:w-5/12"
                alt="StrapiLogo"
              />
              <p className="text-center text-2xl mt-3 sm:mt-1 md:mt-3">
                Strapi
              </p>
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
            className="w-2/4 h-3/4 mb-20 pl-4 lg: lg:w-7/12"
            src={ConsultantHero}
            alt="ConsultantHero img"
          />
          <div className="h-2/3 mr-24 lg:mr-8">
            <h2 className="text-3xl font-semibold text-orange-500 text-start mb-8 2xl:mb-12 2xl:text-5xl">
              {t("services.consultant.title")}
            </h2>
            <p className="font-semibold text-base text-fuchsia-900 2xl:text-xl">
              {t("services.consultant.description")}
              <br />
              <br />
              {t("services.consultant.description2")}
              <br />
              <br />
              {t("services.consultant.description3")}
            </p>
            <Link to="/contact">
              <button className="my-10 bg-fuchsia-900 text-white rounded w-40 h-12 text-2xl 2xl:my-16 hover:bg-orange-600">
                {t("services.consultant.contactUs")}
              </button>
            </Link>
          </div>
        </div>

        <div
          id="carouselExampleControlsBigScreen"
          className="mb-20 carousel slide relative carousel-dark h-full flex"
          data-bs-ride="carousel"
        >
          <div className="bg-white carousel-inner h-60 rounded-2xl relative mx-auto overflow-hidden self-center w-80">
            <div className="mt-16 carousel-item active relative float-left w-full h-full">
              <img
                src={HtmlLogo}
                className="block mx-auto w-1/2 h-1/2 rounded-2xl"
                alt="HtmlLogo"
              />
            </div>
            <div className="mt-16 carousel-item relative float-left w-full h-full">
              <img
                src={CssLogo}
                className="block mx-auto w-2/5 h-3/6 rounded-2xl"
                alt="CssLogo"
              />
            </div>
            <div className="mt-12 carousel-item relative float-left w-full h-full">
              <img
                src={TailwindLogo}
                className="block mx-auto w-3/5 h-3/5 rounded-2xl"
                alt="TailwindLogo"
              />
              <p className="text-center text-2xl">Tailwind CSS</p>
            </div>
            <div className="mt-8 carousel-item relative float-left w-full h-full">
              <img
                src={SassLogo}
                className="block mx-auto mt-5 w-2/5 h-3/6 rounded-2xl"
                alt="SassLogo"
              />
              <p className="text-center text-2xl mt-5">Sass</p>
            </div>
            <div className="mt-8 carousel-item relative float-left w-full h-full">
              <img
                src={JSLogo}
                className="block mx-auto mt-6 w-2/5 h-3/6 rounded-2xl"
                alt="JSLogo"
              />
              <p className="text-center text-2xl mt-4">JavaScript</p>
            </div>
            <div className="mt-10 carousel-item relative float-left w-full h-full">
              <img
                src={ReactLogo}
                className="block mx-auto w-4/6 h-4/6 rounded-2xl"
                alt="ReactLogo"
              />
              <p className="text-center text-2xl -mt-2">React & React Native</p>
            </div>
            <div className="mt-8 carousel-item relative float-left w-full h-full">
              <img
                src={ReduxLogo}
                className="block mx-auto w-2/5 h-3/6 mt-5 rounded-2xl"
                alt="ReduxLogo"
              />
              <p className="text-center text-2xl mt-5">Redux</p>
            </div>
            <div className="mt-8 carousel-item relative float-left w-full h-full">
              <img
                src={TypeScriptLogo}
                className="block mx-auto w-2/5 h-3/6 mt-6 rounded-2xl"
                alt="TypeScriptLogo"
              />
              <p className="text-center text-2xl mt-4">TypeScript</p>
            </div>
            <div className="mt-10 carousel-item relative float-left w-full h-full">
              <img
                src={NodeLogo}
                className="block mx-auto w-2/4 h-3/5 mt-6 rounded-2xl"
                alt="NodeLogo"
              />
            </div>
            <div className="mt-10 carousel-item relative float-left w-full h-full">
              <img
                src={ExpressLogo}
                className="block mx-auto w-3/5 h-3/6 mt-6 rounded-2xl"
                alt="ExpressLogo"
              />
            </div>
            <div className="mt-10 carousel-item relative float-left w-full h-full">
              <img
                src={MongoDBLogo}
                className="block mx-auto w-3/6 h-3/4 rounded-2xl"
                alt="Mongoose Logo"
              />
            </div>
            <div className="mt-8 carousel-item relative float-left w-full h-full">
              <img
                src={MongooseLogo}
                className="block mx-auto w-3/6 h-5/6 rounded-2xl"
                alt="MongooseLogo"
              />
            </div>
            <div className="mt-9 carousel-item relative float-left w-full h-full">
              <img
                src={FigmaLogo}
                className="block mx-auto w-3/6 mt-2 rounded-2xl"
                alt="FigmaLogo"
              />
              <p className="text-center text-2xl -mt-3">Figma</p>
            </div>
            <div className="mt-8 carousel-item relative float-left w-full h-full">
              <img
                src={StrapiLogo}
                className="block mx-auto w-2/5 mt-5 rounded-2xl"
                alt="StrapiLogo"
              />
              <p className="text-center text-2xl mt-3">Strapi</p>
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
