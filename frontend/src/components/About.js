import React from "react";
import { Link } from "react-router-dom";
import AboutHero from "../assets/aboutHero.png";
import MandusProfile from "../assets/mandusProfile.png";
import CuongProfile from "../assets/cuongProfile.png";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <section className="MOBILE-MENU lg:hidden w-screen">
          <div className="flex flex-col items-center px-6 sm:px-12">
            <img
              className="py-6 md:h-[550px]"
              src={AboutHero}
              alt="3 people in office with a screen in the background."
            />
            <h2 className="mt-6 text-3xl font-semibold text-orange-500 text-center">
              {t("aboutPage.title")}
            </h2>
            <p className="mt-10 font-semibold text-lg text-fuchsia-900 p-4 md:mx-8">
              {t("aboutPage.description")} <br />
              <br />
              {t("aboutPage.description2")} <br />
              <br />
              {t("aboutPage.description3")}
            </p>
            <Link to="/contact">
              <button className="my-10 bg-fuchsia-900 text-white hover:bg-orange-600 rounded w-40 h-12 md:text-xl">
                {t("aboutPage.contactUs")}
              </button>
            </Link>
          </div>

          <div
            id="carouselExampleCaptions"
            className="carousel slide relative carousel-dark"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner relative w-full overflow-hidden h-screen">
              <h3 className="text-3xl md:text-5xl my-12 text-orange-500 font-semibold text-center mb-20">
                {t("aboutPage.coworkers")}
              </h3>

              <div className="carousel-item active relative float-left w-full">
                <div className="flex flex-col text-center text-fuchsia-900 font-semibold bg-white h-96 w-3/4 md:w-2/4 sm:w-2/4 mx-auto rounded-3xl">
                  <div className="flex items-center bg-blue-100 p-2 rounded-full mx-auto mt-8">
                    <img
                      className="h-48 w-44"
                      src={MandusProfile}
                      alt="Profile of staff."
                    />
                  </div>
                  <h4 className="text-xl mt-6 mb-4 md:text-2xl">
                    Mandus Lindström
                  </h4>
                  <p className="font-light md:text-xl mb-12 px-4 sm:mb-10">
                    {t("aboutPage.workTitleMandus")}
                    <br />

                    {t("aboutPage.phoneNrMandus")}
                  </p>
                </div>
              </div>

              <div className="carousel-item relative float-left w-full">
                <div className="flex flex-col text-center text-fuchsia-900 font-semibold bg-white h-96 w-3/4 md:w-2/4 sm:w-2/4 mx-auto rounded-3xl">
                  <div className="flex items-center bg-blue-100 p-2 rounded-full mx-auto mt-8">
                    <img
                      className="h-48 w-44"
                      src={CuongProfile}
                      alt="Profile of staff."
                    />
                  </div>
                  <h4 className="text-xl mt-6 mb-4 md:text-2xl">Cuong To</h4>
                  <p className="font-light md:text-xl mb-12 px-4 sm:mb-10">
                    {t("aboutPage.workTitleCuong")}
                  </p>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 mb-14"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 mb-14"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
      </div>

      <section className="DESKTOP-MENU hidden lg:block">
        <div className="flex flex-row-reverse items-center h-screen mx-8 2xl:mx-20">
          <img
            className="w-4/6 h-3/4 mb-20 pl-10 2xl:w-7/12 2xl:pl-6"
            src={AboutHero}
            alt="3 people in office with a screen in the background."
          />
          <div>
            <h2 className="text-3xl font-semibold text-orange-500 text-start mb-8 2xl:mb-8 2xl:text-5xl">
              {t("aboutPage.title")}
            </h2>
            <p className="font-semibold text-base text-fuchsia-900 2xl:text-lg">
              {t("aboutPage.description")}
              <br />
              <br />
              {t("aboutPage.description2")} <br />
              <br />
              {t("aboutPage.description3")}
            </p>
            <Link to="/contact">
              <button className="my-10 bg-fuchsia-900 text-white rounded w-40 h-12 text-2xl hover:bg-orange-600">
                {t("aboutPage.contactUs")}
              </button>
            </Link>
          </div>
        </div>

        <h3 className="text-5xl my-16 text-orange-500 font-semibold text-center">
          {t("aboutPage.coworkers")}
        </h3>

        <div className="mb-32 flex">
          <div className="flex flex-col text-center text-fuchsia-900 font-semibold bg-white h-96 w-1/4 mx-auto rounded-3xl">
            <div className="flex items-center bg-blue-100 p-2 rounded-full mx-auto mt-4">
              <img
                className="h-52 w-44"
                src={MandusProfile}
                alt="Profile of staff."
              />
            </div>
            <h4 className="text-xl mt-8 mb-4 xl:text-2xl">Mandus Lindström</h4>
            <p className="font-light mb-12 text-lg xl:mb-11 lg:mb-5">
              {t("aboutPage.workTitleMandus")}
              <br />
              {t("aboutPage.phoneNrMandus")}
            </p>
          </div>

          <div className="flex flex-col text-center text-fuchsia-900 font-semibold bg-white h-96 w-1/4 mx-auto rounded-3xl">
            <div className="flex items-center bg-blue-100 p-2 rounded-full mx-auto mt-4">
              <img
                className="h-52 w-44"
                src={CuongProfile}
                alt="Profile of staff."
              />
            </div>
            <h4 className="text-xl mt-8 mb-4 xl:text-2xl">Cuong To</h4>
            <p className="font-light mb-12 text-lg xl:mb-3 lg:mb-5">
              {t("aboutPage.workTitleCuong")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
