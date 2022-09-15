import React from "react";
import { Link } from "react-router-dom";
import HeroLaptop from "../../assets/mobile_and_web.png";
import FigmaLogo from "../../assets/figmalogo.png";
import ReactLogo from "../../assets/react.png";
import JSLogo from "../../assets/js.png";

export default function ServicesApps() {
  return (
    <div className="w-screen">
      <div className="flex flex-col items-center px-6 sm:px-12 lg:px-28 2xl:px-48">
        <img
          className="py-6 lg:h-[500px] lg:w-full"
          src={HeroLaptop}
          alt="Goat bg img"
        />
        <h2 className="mt-6 text-3xl font-semibold text-orange-500 text-center lg:text-4xl">
          Websites & Mobileapps Development
        </h2>
        <Link to="/contact">
          <button className="my-10 bg-fuchsia-900 text-white hover:bg-orange-600 rounded w-40 h-12 lg:text-2xl">
            Let´s Talk
          </button>
        </Link>
        <p className="mt-10 text-lg text-fuchsia-900 bg-white rounded-3xl p-4 lg:py-12 lg:px-16 lg:text-2xl sm:mx-[85px]">
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
      </div>

      <div
        id="carouselExampleControls"
        className="my-10 carousel slide relative carousel-dark h-full flex"
        data-bs-ride="carousel"
      >
        <div className="bg-white carousel-inner h-60 rounded-2xl relative w-4/6 mx-auto overflow-hidden self-center xl:w-80 lg:w-2/6 sm:w-3/6">
          <div className="mt-14 carousel-item active relative float-left w-full h-full">
            <img
              src={JSLogo}
              className="block mx-auto w-1/2 h-1/2 rounded-2xl lg:w-3/6 lg:mx-auto md:w-3/6 sm:w-3/6"
              alt="JS Logo"
            />
            <p className="text-center text-2xl mt-5">JavaScript</p>
          </div>
          <div className="mt-9 carousel-item relative float-left w-full h-full">
            <img
              src={ReactLogo}
              className="block mx-auto w-2/3 h-2/3 rounded-2xl lg:w-3/5 lg:mx-auto md:w-4/6 sm:w-5/6"
              alt="React Logo"
            />
            <p className="text-center text-2xl">React & React Native</p>
          </div>
          <div className="mt-8 carousel-item relative float-left w-full h-full">
            <img
              src={FigmaLogo}
              className="block mx-auto w-2/3 h-2/3 rounded-2xl lg:w-3/6 md:w-3/6 sm:w-4/6"
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

      <div>
        <p className="pb-6 mt-20 text-sm text-slate-600 text-center">
          All prices are exclusive of VAT. By purchasing an application, you
          hereby agree to the{" "}
          <Link className="underline" to={"/purchase-conditions"}>
            terms of purchase.
          </Link>
        </p>
        <div className="flex flex-col bg-white shadow-xl shadow-slate-900 text-fuchsia-900 mx-5 sm:px-12 lg:px-28 2xl:px-48">
          <div className="flex flex-col items-center bg-slate-200 py-6">
            <h6 className="text-2xl font-bold">Small</h6>
            <p className="text-4xl font-bold py-4">99 Euro/Month</p>
            <p className="pb-4">Perfect for a small company or the startup.</p>
            <p>Consultation free of charge.</p>
            <Link to="/contact">
              <button className="mt-6 bg-fuchsia-900 text-white hover:bg-orange-600 rounded w-40 h-12 lg:text-2xl">
                Book Consultation
              </button>
            </Link>
          </div>
          <div>
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
        <div className="flex flex-col bg-white shadow-xl shadow-slate-900 text-fuchsia-900 mx-5 my-10 sm:px-12 lg:px-28 2xl:px-48">
          <div className="flex flex-col items-center bg-slate-200 py-6">
            <h6 className="text-2xl font-bold">Medium</h6>
            <p className="text-4xl font-bold py-4">149 Euro/Month</p>
            <p className="pb-4">Do u have more ideas/information..?</p>
            <p>Consultation free of charge.</p>
            <Link to="/contact">
              <button className="mt-6 bg-fuchsia-900 text-white hover:bg-orange-600 rounded w-40 h-12 lg:text-2xl">
                Book Consultation
              </button>
            </Link>
          </div>
          <div>
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
        <div className="flex flex-col bg-white shadow-xl shadow-slate-900 text-fuchsia-900 mx-5 my-10 sm:px-12 lg:px-28 2xl:px-48">
          <div className="flex flex-col items-center bg-slate-200 py-6">
            <h6 className="text-2xl font-bold">Big</h6>
            <p className="text-4xl font-bold py-4">349 Euro/Month</p>
            <p className="pb-4 px-2 text-center">
              For companies who have more information to display or more complex
              needs.
            </p>
            <p>Consultation free of charge.</p>
            <Link to="/contact">
              <button className="mt-6 bg-fuchsia-900 text-white hover:bg-orange-600 rounded w-40 h-12 lg:text-2xl">
                Book Consultation
              </button>
            </Link>
          </div>
          <div>
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
  );
}
