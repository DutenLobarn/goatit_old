import React from "react";
import PortfolioBig from "../../assets/portfolioBig.png";
import MJ from "../../assets/MJ.png";
import Enver from "../../assets/portfolioPng2.png";
import Pebisnis from "../../assets/portfolioPng3.png";
import ArchiWeb from "../../assets/portfolioPng4.png";

export default function HomePortfolio() {
  return (
    <section className="h-3/5 flex flex-col items-center lg:mb-20">
      <h3 className="text-3xl md:text-5xl mb-10 text-orange-500 font-semibold">
        Portfolio
      </h3>
      <div
        // style={{
        //   backgroundImage: `url(${PortfolioBig})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
        className="h-full w-full"
      >
        <div
          id="carouselExampleControls"
          className="carousel slide relative carousel-fade carousel-dark h-full flex"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner relative w-4/6 mx-auto overflow-hidden self-center">
            <div className="carousel-item active relative float-left w-full h-full">
              <img
                src={MJ}
                className="block w-full lg:w-2/5 lg:mx-auto md:w-4/6 sm:w-5/6 md:mx-auto sm:mx-auto"
                alt="Wild Landscape"
              />
            </div>
            <div className="carousel-item relative float-left w-full h-full">
              <img
                src={Enver}
                className="block w-full lg:w-2/5 lg:mx-auto md:w-4/6 sm:w-5/6 md:mx-auto sm:mx-auto"
                alt="Wild Landscape"
              />
            </div>
            <div className="carousel-item relative float-left w-full h-full">
              <img
                src={Pebisnis}
                className="block w-full lg:w-2/5 lg:mx-auto md:w-4/6 sm:w-5/6 md:mx-auto sm:mx-auto"
                alt="Wild Landscape"
              />
            </div>
            <div className="carousel-item relative float-left w-full h-full">
              <img
                src={ArchiWeb}
                className="block w-full lg:w-2/5 lg:mx-auto md:w-4/6 sm:w-5/6 md:mx-auto sm:mx-auto"
                alt="Wild Landscape"
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
    </section>
  );
}
