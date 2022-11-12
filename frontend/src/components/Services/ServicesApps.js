import React from "react";
import { Link } from "react-router-dom";
import WebAppHero from "../../assets/webAppHero.png";
import FigmaLogo from "../../assets/figmalogo.png";
import ReactLogo from "../../assets/react.png";
import JSLogo from "../../assets/js.png";

export default function ServicesApps() {
  return (
    <>
      <div className="MOBILE-MENU lg:hidden w-screen">
        <div className="flex flex-col items-center px-6 sm:px-12">
          <img
            className="py-6 md:h-[550px]"
            src={WebAppHero}
            alt="Goat bg img"
          />
          <h2 className="mt-6 text-3xl font-semibold text-orange-500 text-center">
            WEB AND MOBILE APPS
          </h2>
          <p className="mt-10 font-semibold text-lg text-fuchsia-900 p-4 md:mx-8">
            Do u need a website or a mobile application that looks proffesional?
            <br />
            <br />
            For a fixed monthly cost we help you with your ideas. We make sure
            that the product matches your demands and specifications.
            <br />
            <br />
            We develop websites and mobile apps using some of the most modern
            technologies that exist, to be able to get user-friendly and fast
            webpages that are easy to handle for the user.
          </p>
          <Link to="/contact">
            <button className="my-10 bg-fuchsia-900 text-white hover:bg-orange-600 rounded w-40 h-12 md:text-xl">
              Let´s Talk
            </button>
          </Link>
        </div>

        <div
          id="carouselExampleControls"
          className="my-10 carousel slide relative carousel-dark h-full flex"
          data-bs-ride="carousel"
        >
          <div className="bg-white carousel-inner h-60 rounded-2xl relative w-4/6 mx-auto overflow-hidden self-center md:w-2/5 sm:w-3/6">
            <div className="mt-14 carousel-item active relative float-left w-full h-full">
              <img
                src={JSLogo}
                className="block mx-auto w-1/2 h-1/2 rounded-2xl md:w-3/6 sm:w-3/6"
                alt="JS Logo"
              />
              <p className="text-center text-2xl mt-5">JavaScript</p>
            </div>
            <div className="mt-9 carousel-item relative float-left w-full h-full">
              <img
                src={ReactLogo}
                className="block mx-auto w-2/3 h-2/3 rounded-2xl md:w-4/6 sm:w-5/6"
                alt="React Logo"
              />
              <p className="text-center text-2xl">React & React Native</p>
            </div>
            <div className="mt-8 carousel-item relative float-left w-full h-full">
              <img
                src={FigmaLogo}
                className="block mx-auto w-2/3 h-2/3 rounded-2xl md:w-3/6 sm:w-4/6"
                alt="Figma Logo"
              />
              <p className="text-center text-2xl">Figma</p>
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

        <div className="sm:w-3/4 sm:mx-auto md:w-3/5">
          <p className="pb-6 mt-20 text-sm text-slate-600 text-center">
            All prices are exclusive of VAT. By purchasing an application, you
            hereby agree to the{" "}
            <Link className="underline" to={"/purchase-conditions"}>
              terms of purchase.
            </Link>
          </p>
          <div className="flex flex-col bg-white shadow-xl shadow-slate-900 text-fuchsia-900 mx-5">
            <div className="flex flex-col items-center bg-slate-200 py-6">
              <h6 className="text-2xl font-bold">Small</h6>
              <p className="text-4xl font-bold py-4">99 Euro/Month</p>
              <p className="pb-4">
                Perfect for a small company or the startup.
              </p>
              <p>Consultation free of charge.</p>
              <Link to="/contact">
                <button className="mt-6 bg-fuchsia-900 text-white hover:bg-orange-600 rounded w-40 h-12">
                  Book Consultation
                </button>
              </Link>
            </div>
            <div className="sm:px-12">
              <ul className="list-disc list-inside pl-4 pt-4 h-72 leading-8">
                <li>Free hosting</li>
                <li>Up to 5 pages</li>
                <li>Custom made design</li>
                <li>Responsiv (fits different screen sizes)</li>
                <li>Unlimited changes every month</li>
                <li>Regular Maintenance</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col bg-white shadow-xl shadow-slate-900 text-fuchsia-900 mx-5 my-10">
            <div className="flex flex-col items-center bg-slate-200 py-6">
              <h6 className="text-2xl font-bold">Medium</h6>
              <p className="text-4xl font-bold py-4">149 Euro/Month</p>
              <p className="pb-4">Do u have more ideas/information..?</p>
              <p>Consultation free of charge.</p>
              <Link to="/contact">
                <button className="mt-6 bg-fuchsia-900 text-white hover:bg-orange-600 rounded w-40 h-12">
                  Book Consultation
                </button>
              </Link>
            </div>
            <div className="sm:px-12">
              <ul className="list-disc list-inside pl-4 pt-4 h-72 leading-8">
                <li>Free hosting</li>
                <li>+ Up to 10 pages</li>
                <li>Custom made design</li>
                <li>Responsiv (fits different screen sizes)</li>
                <li>Unlimited changes every month</li>
                <li>Regular Maintenance</li>
                <li>+ Custom made logo</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col bg-white shadow-xl shadow-slate-900 text-fuchsia-900 mx-5 my-10">
            <div className="flex flex-col items-center bg-slate-200 py-6">
              <h6 className="text-2xl font-bold">Big</h6>
              <p className="text-4xl font-bold py-4">349 Euro/Month</p>
              <p className="pb-4 px-2 text-center sm:px-12">
                For companies who have more information to display or more
                complex needs.
              </p>
              <p>Consultation free of charge.</p>
              <Link to="/contact">
                <button className="mt-6 bg-fuchsia-900 text-white hover:bg-orange-600 rounded w-40 h-12">
                  Book Consultation
                </button>
              </Link>
            </div>
            <div className="sm:px-12">
              <ul className="list-disc list-inside pl-4 pt-4 h-72 leading-8">
                <li>Free hosting</li>
                <li>+ Up to 20 pages</li>
                <li>Custom made design</li>
                <li>Responsiv (fits different screen sizes)</li>
                <li>Unlimited changes every month</li>
                <li>Regular Maintenance</li>
                <li>+ Custom made logo</li>
                <li>+ Advanced functionality or E-commerce</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="DESKTOP-MENU hidden lg:block">
        <div className="flex flex-row-reverse items-center h-screen mx-8 2xl:mx-20">
          <img
            className="w-2/4 h-3/4 mb-20 pl-4"
            src={WebAppHero}
            alt="Goat bg img"
          />
          <div className="h-2/3">
            <h2 className="text-3xl font-semibold text-orange-500 text-start mb-8 2xl:mb-12 2xl:text-5xl">
              WEB AND MOBILE APPS
            </h2>
            <p className="font-semibold text-base text-fuchsia-900 2xl:text-xl">
              Do u need a website or a mobile application that looks
              proffesional?
              <br />
              <br />
              For a fixed monthly cost we help you with your ideas. We make sure
              that the product matches your demands and specifications.
              <br />
              <br />
              We develop websites and mobile apps using some of the most modern
              technologies that exist, to be able to get user-friendly and fast
              webpages that are easy to handle for the user.
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
          className="mb-10 carousel slide relative carousel-dark h-full flex"
          data-bs-ride="carousel"
        >
          <div className="bg-white carousel-inner h-60 rounded-2xl relative mx-auto overflow-hidden self-center w-80 ">
            <div className="mt-14 carousel-item active relative float-left w-full h-full">
              <img
                src={JSLogo}
                className="block mx-auto h-1/2 rounded-2xl w-3/6"
                alt="JS Logo"
              />
              <p className="text-center text-2xl mt-5">JavaScript</p>
            </div>
            <div className="mt-9 carousel-item relative float-left w-full h-full">
              <img
                src={ReactLogo}
                className="block mx-auto h-2/3 rounded-2xl w-3/5"
                alt="React Logo"
              />
              <p className="text-center text-2xl">React & React Native</p>
            </div>
            <div className="mt-8 carousel-item relative float-left w-full h-full">
              <img
                src={FigmaLogo}
                className="block mx-auto h-2/3 rounded-2xl w-3/6"
                alt="Figma Logo"
              />
              <p className="text-center text-2xl">Figma</p>
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

        <div className="mb-32">
          <p className="pb-6 mt-40 text-slate-600 text-center">
            All prices are exclusive of VAT. By purchasing an application, you
            hereby agree to the{" "}
            <Link className="underline" to={"/purchase-conditions"}>
              terms of purchase.
            </Link>
          </p>
          <div className="flex justify-around w-full mb-12">
            <div className="w-1/3 bg-white shadow-xl shadow-slate-900 text-fuchsia-900 mx-6 2xl:mx-10">
              <div className="flex flex-col items-center bg-slate-200 py-4 h-80">
                <h6 className="text-2xl font-bold">Small</h6>
                <p className="text-4xl font-bold py-6 text-2xl 2xl:text-4xl">
                  99 Euro/Month
                </p>
                <p className="pb-8 text-sm 2xl:text-lg ">
                  Perfect for a small company or the startup.
                </p>
                <p className="text-sm 2xl:text-lg">
                  Consultation free of charge.
                </p>
                <Link to="/contact">
                  <button className="bg-fuchsia-900 text-white hover:bg-orange-600 rounded h-12 text-lg w-48 mt-11 2xl:mt-8 2xl:w-60 2xl:text-xl">
                    Book Consultation
                  </button>
                </Link>
              </div>
              <div className="px-2 2xl:px-10">
                <ul className="font-medium list-disc list-inside pt-8 h-80 leading-8 text-base 2xl:text-lg ">
                  <li>Free hosting</li>
                  <li>Up to 5 pages</li>
                  <li>Custom made design</li>
                  <li>Responsiv (fits different screen sizes)</li>
                  <li>Unlimited changes every month</li>
                  <li>Regular Maintenance</li>
                </ul>
              </div>
            </div>
            <div className="w-1/3 bg-white shadow-xl shadow-slate-900 text-fuchsia-900">
              <div className="flex flex-col items-center bg-slate-200 py-4 h-80">
                <h6 className="text-2xl font-bold">Medium</h6>
                <p className="font-bold py-6 text-2xl 2xl:text-4xl">
                  149 Euro/Month
                </p>
                <p className="pb-9 text-sm 2xl:text-lg">
                  Do u have more ideas/information..?
                </p>
                <p className="text-sm 2xl:text-lg">
                  Consultation free of charge.
                </p>
                <Link to="/contact">
                  <button className="bg-fuchsia-900 text-white hover:bg-orange-600 rounded h-12 text-lg w-48 mt-10 2xl:w-60 2xl:text-xl 2xl:mt-6">
                    Book Consultation
                  </button>
                </Link>
              </div>
              <div className="px-2 2xl:px-10 ">
                <ul className="font-medium list-disc list-inside pt-8 h-80 leading-8 text-base 2xl:text-lg">
                  <li>Free hosting</li>
                  <li>+ Up to 10 pages</li>
                  <li>Custom made design</li>
                  <li>Responsiv (fits different screen sizes)</li>
                  <li>Unlimited changes every month</li>
                  <li>Regular Maintenance</li>
                  <li>+ Custom made logo</li>
                </ul>
              </div>
            </div>
            <div className="w-1/3 bg-white shadow-xl shadow-slate-900 text-fuchsia-900 mx-6  2xl:mx-10">
              <div className="flex flex-col items-center bg-slate-200 py-4 h-80">
                <h6 className="text-2xl font-bold">Big</h6>
                <p className="font-bold py-6 text-2xl 2xl:text-4xl">
                  349 Euro/Month
                </p>
                <p className="text-center text-sm mx-2 pb-4 2xl:pb-2 2xl:mx-4 2xl:text-lg">
                  For companies who have more information to display or more
                  complex needs.
                </p>
                <p className="text-sm 2xl:text-lg">
                  Consultation free of charge.
                </p>
                <Link to="/contact">
                  <button className="bg-fuchsia-900 text-white hover:bg-orange-600 rounded h-12 text-lg w-48 mt-10 2xl:mt-6 2xl:w-60 2xl:text-xl">
                    Book Consultation
                  </button>
                </Link>
              </div>
              <div className="px-2 2xl:px-10">
                <ul className="font-medium list-disc list-inside pt-8 h-80 leading-8 text-base 2xl:text-lg">
                  <li>Free hosting</li>
                  <li>+ Up to 20 pages</li>
                  <li>Custom made design</li>
                  <li>Responsiv (fits different screen sizes)</li>
                  <li>Unlimited changes every month</li>
                  <li>Regular Maintenance</li>
                  <li>+ Custom made logo</li>
                  <li>+ Advanced functionality or E-commerce</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
