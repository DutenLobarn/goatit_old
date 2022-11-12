import React from "react";
import { Link } from "react-router-dom";
import "tw-elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faMobile,
  faArrowRight,
  faDisplay,
  faPeopleCarryBox,
} from "@fortawesome/free-solid-svg-icons";

export default function HomeServices() {
  return (
    <>
      <section className="MOBILE-MENU lg:hidden">
        <div
          id="carouselExampleCaptions"
          className="carousel slide relative carousel-dark"
          data-bs-ride="carousel"
        >
          {/* <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-20">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div> */}

          <div className="carousel-inner relative w-full overflow-hidden h-screen">
            <h3 className="text-3xl md:text-5xl my-12 text-orange-500 font-semibold text-center mb-20">
              OUR SERVICES
            </h3>

            <Link
              to="/services/apps"
              className="carousel-item active relative float-left w-full"
            >
              <div className="flex flex-col text-center text-fuchsia-900 font-semibold bg-white h-96 w-3/4 md:w-2/4 sm:w-2/4 mx-auto rounded-3xl">
                <div className="flex items-center bg-blue-100 w-fit h-[120px] p-2 rounded-full mx-auto mt-8">
                  <FontAwesomeIcon icon={faLaptop} className="h-12 w-16 mr-3" />
                  <FontAwesomeIcon
                    icon={faMobile}
                    className="ml-2 h-7 h-8 md:ml-1"
                  />
                </div>
                <h4 className="text-xl md:text-2xl mt-6 mb-5">
                  Websites & Mobile Apps
                </h4>
                <p className="font-light md:text-xl mb-10 px-4">
                  We design and create custom made websites and mobile apps.
                </p>
                <p className="text-start mx-auto mb-6 hover:text-orange-700">
                  Learn more
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 text-lg"
                  />
                </p>
              </div>
            </Link>

            <Link
              to="/services/system"
              className="carousel-item relative float-left w-full"
            >
              <div className="flex flex-col text-center text-fuchsia-900 font-semibold bg-white h-96 w-3/4 sm:w-2/4 mx-auto rounded-3xl">
                <div className="flex items-center bg-blue-100 w-fit p-1 rounded-full mx-auto mt-8">
                  <FontAwesomeIcon
                    icon={faDisplay}
                    className="px-7 h-28 w-14"
                  />
                </div>
                <h4 className="text-xl md:text-2xl mt-6">System Development</h4>
                <p className="font-light md:text-xl mb-10 mt-5 px-4">
                  We develop systems after your needs using leading
                  technologies.
                </p>
                <p className="text-start mx-auto mb-6 hover:text-orange-700 md:mb-1">
                  Learn more
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 text-lg"
                  />
                </p>
              </div>
            </Link>

            <Link
              to="/services/consultant"
              className="carousel-item relative float-left w-full"
            >
              <div className="flex flex-col text-center text-fuchsia-900 font-semibold bg-white h-96 w-3/4 md:w-2/4 sm:w-2/4 mx-auto rounded-3xl">
                <div className="flex items-center bg-blue-100 p-2 rounded-full mx-auto mt-8">
                  <FontAwesomeIcon
                    icon={faPeopleCarryBox}
                    className="p-5 h-16 w-16 w-16 md:p-5 h-16 w-16"
                  />
                </div>
                <h4 className="text-xl mt-6 mb-4 md:text-2xl">
                  Hire a Consultant
                </h4>
                <p className="font-light md:text-xl mb-12 px-4 sm:mb-10">
                  We provide your buisness with extra labour.
                </p>
                <p className="text-start mx-auto hover:text-orange-700">
                  Learn more
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 text-lg"
                  />
                </p>
              </div>
            </Link>
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

      <section className="DESKTOP-MENU hidden h-screen lg:flex flex-col justify-evenly">
        <h3 className="text-5xl my-16 text-orange-500 font-semibold text-center">
          OUR SERVICES
        </h3>

        <div className="h-screen flex">
          <Link
            to="/services/apps"
            className="flex flex-col text-center text-fuchsia-900 font-semibold bg-white h-96 w-1/4 mx-auto rounded-3xl hover:drop-shadow-2xl"
          >
            <div className="flex items-center bg-blue-100 p-2 rounded-full mx-auto mt-8">
              <FontAwesomeIcon icon={faLaptop} className="mr-2 h-28 w-16" />
              <FontAwesomeIcon icon={faMobile} className="ml-2 h-8 w-8" />
            </div>
            <h4 className="text-xl mt-8 mb-4 xl:text-2xl">
              Websites & Mobile Apps
            </h4>
            <p className="font-light mb-12 px-4 xl:text-lg xl:mb-11 lg:mb-8">
              We design and create custom made websites and mobile apps.
            </p>
            <p className="text-start mx-auto mb-2 hover:text-orange-700">
              Learn more
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-lg" />
            </p>
          </Link>

          <Link
            to="/services/system"
            className="flex flex-col text-center text-fuchsia-900 font-semibold bg-white h-96 w-1/4 mx-auto rounded-3xl hover:drop-shadow-2xl"
          >
            <div className="flex items-center bg-blue-100 p-2 rounded-full mx-auto mt-8">
              <FontAwesomeIcon icon={faDisplay} className="p-6 h-16 w-16" />
            </div>
            <h4 className="text-xl mt-8 mb-4 xl:text-2xl">
              System Development
            </h4>
            <p className="font-light mb-12 text-lg px-4 xl:text-lg xl:mb-3 lg:mb-5">
              We develop systems after your needs using leading technologies.
            </p>
            <p className="text-start mx-auto mb-2 hover:text-orange-700 xl:mt-8">
              Learn more
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-lg" />
            </p>
          </Link>

          <Link
            to="/services/consultant"
            className=" flex flex-col text-center text-fuchsia-900 font-semibold bg-white h-96 w-1/4 mx-auto rounded-3xl hover:drop-shadow-2xl"
          >
            <div className="flex items-center bg-blue-100 p-2 rounded-full mx-auto mt-8">
              <FontAwesomeIcon
                icon={faPeopleCarryBox}
                className="p-6 h-16 w-16"
              />
            </div>
            <h4 className="text-xl mt-8 mb-4 xl:text-2xl">Hire a Consultant</h4>
            <p className="font-light mb-5 text-lg px-4 xl:text-lg xl:mb-10">
              We provide your buisness with the extra labour u need.
            </p>
            <p className="text-start mx-auto mb-2 hover:text-orange-700">
              Learn more
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-lg" />
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
