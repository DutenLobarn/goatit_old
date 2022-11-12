import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/4.png";

export default function Footer() {
  return (
    <footer>
      <div className="MOBILE-MENU flex lg:hidden flex items-center flex-col bg-slate-800 xl:flex-row">
        <Link to="/" className="my-3">
          <img className="w-2/12 mx-auto mb-6" src={Logo} alt="logo" />
        </Link>
        {/* <p className="mb-6 text-slate-400 w-80 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus, vel
          volutpat blandit
        </p> */}
        <div className="flex w-64 justify-between mb-4">
          <ul>
            <li className="text-slate-400">Services</li>
            <div className="flex flex-col items-start">
              <li className="pt-3 text-slate-400 text-sm hover:text-orange-500">
                <Link to="/services/apps">- Web and Mobile Apps</Link>
              </li>
              <li className="pt-3 text-slate-400 text-sm hover:text-orange-500">
                <Link to="/services/system">- System Development</Link>
              </li>
              <li className="pt-3 text-slate-400 text-sm hover:text-orange-500">
                <Link to="/services/consultant">- Hire a Consultant</Link>
              </li>
            </div>
            <li className="my-6 text-slate-400 hover:text-orange-500">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="my-6 text-slate-400 hover:text-orange-500">
              <Link to="/about">About Us</Link>
            </li>
            <Link to="/contact">
              <button className="flex justify-center items-center bg-slate-100 text-slate-800 hover:bg-orange-500 text-slate-400 rounded w-24 h-8">
                Let´s Talk
              </button>
            </Link>
          </ul>
          <div className="flex items-center flex-col justify-between">
            <Link to="/facebook">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-slate-400 hover:text-orange-500 text-3xl"
              />
            </Link>
            <Link to="/instagram">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-slate-400 hover:text-orange-500 text-3xl"
              />
            </Link>
            <Link to="/linkedin">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-slate-400 hover:text-orange-500 text-3xl"
              />
            </Link>
          </div>
        </div>
        <p className="text-slate-400 mb-4 text-xs">
          Copyright © 2022 GOAT IT AB. All Rights Reserved
        </p>
      </div>

      <div className="DESKTOP-MENU hidden h-60 lg:flex flex-col bg-slate-800">
        <div className="flex justify-around h-full">
          {/* <div className="flex "> */}
          <Link to="/" className="text-slate-400 w-80 text-center my-auto">
            <img className="w-5/12" src={Logo} alt="logo" />
          </Link>
          {/* <p className="text-slate-400 w-80 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus,
              vel volutpat blandit
            </p> */}
          {/* </div> */}
          <div className="flex items-center w-2/3 justify-between">
            <div className="h-full w-1/2">
              <ul className="flex h-1/2 w-full pt-8 justify-around text-xl">
                <li className="peer text-slate-400 cursor-pointer">Services</li>

                <div className="absolute mt-6 hidden peer-hover:flex hover:flex flex-col items-start lg:mr-[160px] xl:mr-[205px] 2xl:mr-[265px]">
                  <li className="pt-3 text-slate-400 text-sm hover:text-orange-500">
                    <Link to="/services/apps">- Web and Mobile Apps</Link>
                  </li>
                  <li className="pt-3 text-slate-400 text-sm hover:text-orange-500">
                    <Link to="/services/system">- System Development</Link>
                  </li>
                  <li className="pt-3 text-slate-400 text-sm hover:text-orange-500">
                    <Link to="/services/consultant">- Hire a Consultant</Link>
                  </li>
                </div>

                <li className="text-slate-400 hover:text-orange-500">
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="text-slate-400 hover:text-orange-500">
                  <Link to="/about">About Us</Link>
                </li>
              </ul>

              <div className="flex h-3/6 items-center flex- justify-around">
                <Link to="/facebook">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-slate-400 hover:text-orange-500 text-4xl"
                  />
                </Link>
                <Link to="/instagram">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-slate-400 hover:text-orange-500 text-4xl"
                  />
                </Link>
                <Link to="/linkedin">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-slate-400 hover:text-orange-500 text-4xl"
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-col h-full justify-around mr-10 items-center mb-4">
              <Link to="/contact">
                <button className="bg-slate-100 text-slate-800 hover:bg-orange-500 text-3xl uppercase font-semibold rounded w-52 h-12">
                  Let´s Talk
                </button>
              </Link>
              <p className="text-slate-400 text-xs">
                Copyright © 2022 GOAT IT AB. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
