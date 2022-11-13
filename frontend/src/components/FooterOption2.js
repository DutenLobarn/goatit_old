import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/1.png";
import FooterFeather from "../assets/FooterFeather.png";

export default function Footer() {
  return (
    <footer>
      <div className="MOBILE-MENU flex lg:hidden flex items-center flex-col shadow-[inset_1px_1px_20px_15px_rgba(98,31,134)] relative z-30">
        <Link to="/" className="my-3 mt-6">
          <img className="w-2/12 mx-auto mb-6" src={Logo} alt="logo" />
        </Link>
        <div className="flex w-64 justify-between mb-4 md:w-3/6 md:text-xl">
          <ul>
            <li>Services</li>
            <div className="flex flex-col items-start">
              <li className="pt-3 text-sm hover:text-orange-500 md:text-base">
                <Link to="/services/apps">- Web and Mobile Apps</Link>
              </li>
              <li className="pt-3 text-sm hover:text-orange-500 md:text-base">
                <Link to="/services/system">- System Development</Link>
              </li>
              <li className="pt-3 text-sm hover:text-orange-500 md:text-base">
                <Link to="/services/consultant">- Hire a Consultant</Link>
              </li>
            </div>
            {/* <li className="my-6 hover:text-orange-500">
              <Link to="/portfolio">Portfolio</Link>
            </li> */}
            <li className="my-6 hover:text-orange-500">
              <Link to="/about">About Us</Link>
            </li>
            <Link to="/contact">
              <button className="flex justify-center items-center bg-fuchsia-900 hover:bg-orange-500 text-white rounded w-24 h-8 md:w-28 md:h-10">
                Let´s Talk
              </button>
            </Link>
          </ul>
          <div className="flex items-center flex-col justify-between text-3xl md:text-5xl">
            <Link to="/facebook">
              <FontAwesomeIcon
                icon={faFacebook}
                className="hover:text-orange-500 "
              />
            </Link>
            <Link to="/instagram">
              <FontAwesomeIcon
                icon={faInstagram}
                className="hover:text-orange-500"
              />
            </Link>
            <Link to="/linkedin">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="hover:text-orange-500"
              />
            </Link>
          </div>
        </div>
        <p className="mb-6 text-xs">
          Copyright © 2022 GOAT IT AB. All Rights Reserved
        </p>
        <img
          className="w-8/12 absolute bottom-0 right-0 -z-40"
          src={FooterFeather}
          alt="FooterFeather"
        />
      </div>

      <div className="DESKTOP-MENU hidden h-60 lg:flex flex-col shadow-[inset_1px_1px_20px_15px_rgba(98,31,134)] relative z-30">
        <div className="flex justify-around h-full">
          <Link to="/" className="w-80 my-auto">
            <img className="w-5/12" src={Logo} alt="logo" />
          </Link>
          <div className="flex items-center w-2/3 justify-between">
            <div className="h-full w-1/2">
              <ul className="flex h-1/2 w-full pt-8 justify-around text-xl font-bold text-black">
                <li className="peer cursor-pointer">Services</li>

                <div className="absolute mt-6 hidden peer-hover:flex hover:flex flex-col items-start lg:mr-[160px] xl:mr-[205px] 2xl:mr-[265px]">
                  <li className="pt-3 text-sm hover:text-orange-500">
                    <Link to="/services/apps">- Web and Mobile Apps</Link>
                  </li>
                  <li className="pt-3 text-sm hover:text-orange-500">
                    <Link to="/services/system">- System Development</Link>
                  </li>
                  <li className="pt-3 text-sm hover:text-orange-500">
                    <Link to="/services/consultant">- Hire a Consultant</Link>
                  </li>
                </div>

                {/* <li className="hover:text-orange-500">
                  <Link to="/portfolio">Portfolio</Link>
                </li> */}
                <li className="hover:text-orange-500">
                  <Link to="/about">About Us</Link>
                </li>
              </ul>

              <div className="flex h-3/6 items-center flex- justify-around text-black">
                <Link to="/facebook">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="hover:text-orange-500 text-4xl"
                  />
                </Link>
                <Link to="/instagram">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="hover:text-orange-500 text-4xl"
                  />
                </Link>
                <Link to="/linkedin">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="hover:text-orange-500 text-4xl"
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-col h-full justify-around mr-10 items-center mb-4">
              <Link to="/contact">
                <button className="bg-fuchsia-900 text-white hover:bg-orange-500 text-3xl uppercase font-semibold rounded w-52 h-12">
                  Let´s Talk
                </button>
              </Link>
              <p className="text-slate-800 text-xs">
                Copyright © 2022 GOAT IT AB. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
        <img
          className="absolute bottom-0 right-0 -z-40"
          src={FooterFeather}
          alt="FooterFeather"
        />
      </div>
    </footer>
  );
}
