import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
// import Logo from "../assets/4.png";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const location = useLocation();

  return (
    <div className="flex items-center justify-between h-16 py-2 lg:py-4 pl-8 bg-fuchsia-900">
      <Link
        to="/"
        className="text-white text-2xl font-extrabold hover:text-orange-500"
      >
        {/* <img className="w-10 h-10 lg:w-12 lg:h-12" src={Logo} alt="logo" /> */}
        GOAT IT
      </Link>
      <nav className="mr-8">
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>

          <div
            className={
              isNavOpen
                ? "showMenuNav bg-gradient-to-r from-blue-100 to-blue-400"
                : "hideMenuNav"
            }
          >
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-fuchsia-900 hover:text-orange-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <div className="my-6">
                <Link to="/facebook" onClick={() => setIsNavOpen(false)}>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-fuchsia-900 hover:text-orange-500 text-2xl"
                  />
                </Link>
                <Link to="/instagram" onClick={() => setIsNavOpen(false)}>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-fuchsia-900 hover:text-orange-500 text-2xl mx-4"
                  />
                </Link>
                <Link to="/linkedin" onClick={() => setIsNavOpen(false)}>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-fuchsia-900 hover:text-orange-500 text-2xl"
                  />
                </Link>
              </div>
              <li
                className="border-b border-gray-400 text-2xl my-4 uppercase text-fuchsia-900 hover:text-orange-700"
                onClick={() => setIsNavOpen(false)}
              >
                <Link to="/">Home</Link>
              </li>
              <li className="my-4 uppercase text-2xl text-fuchsia-900">
                <p to="/services">Services ↓</p>
              </li>
              <li
                className="border-b border-gray-400 my-4 uppercase text-fuchsia-900 hover:text-orange-700"
                onClick={() => setIsNavOpen(false)}
              >
                <Link to="/services/apps">Web and Mobile Apps</Link>
              </li>
              <li
                className="border-b border-gray-400 my-4 uppercase text-fuchsia-900 hover:text-orange-700"
                onClick={() => setIsNavOpen(false)}
              >
                <Link to="/services/system">System Developments</Link>
              </li>
              <li
                className="border-b border-gray-400 my-4 uppercase text-fuchsia-900 hover:text-orange-700"
                onClick={() => setIsNavOpen(false)}
              >
                <Link to="/services/consultant">Hire a Consultant</Link>
              </li>
              <li
                className="border-b border-gray-400 text-2xl my-4 uppercase text-fuchsia-900 hover:text-orange-700"
                onClick={() => setIsNavOpen(false)}
              >
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li
                className="border-b border-gray-400 text-2xl my-4 uppercase text-fuchsia-900 hover:text-orange-700"
                onClick={() => setIsNavOpen(false)}
              >
                <Link to="/about">About Us</Link>
              </li>
              <button
                className="bg-fuchsia-900 my-4 uppercase text-2xl text-white hover:bg-orange-700 rounded w-40 h-12"
                onClick={() => setIsNavOpen(false)}
              >
                <Link to="/contact">Let´s Talk</Link>
              </button>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-12 lg:flex lg:space-x-6">
          <Link to="/">
            <button
              className={
                "text-white hover:bg-orange-700 rounded-3xl w-24 h-8 border " +
                (location.pathname === "/" ? "border-white" : "border-black")
              }
            >
              Home
            </button>
          </Link>
          {/* <Link to="/services">
            <button
              className={
                "text-white hover:bg-orange-700 rounded-3xl w-24 h-8 border " +
                (location.pathname === "/services"
                  ? "border-white"
                  : "border-black")
              }
            >
              Services
            </button>
          </Link> */}
          <div>
            <button
              className={
                "peer text-white hover:bg-orange-700 rounded-3xl w-24 h-8 border " +
                (location.pathname === "/services/apps"
                  ? "border-white"
                  : location.pathname === "/services/system"
                  ? "border-white"
                  : location.pathname === "/services/consultant"
                  ? "border-white"
                  : "border-black")
              }
            >
              Services
            </button>
            <div className="absolute -ml-12 w-38 rounded-2xl hidden peer-hover:flex hover:flex flex-col items-start bg-white drop-shadow-lg">
              <Link
                className="p-6 w-full rounded-t-2xl hover:bg-orange-500 hover:text-white"
                to="/services/apps"
              >
                Web and Mobile Apps
              </Link>
              <Link
                className="p-6 w-full  hover:bg-orange-500 hover:text-white"
                to="/services/system"
              >
                System Development
              </Link>
              <Link
                className="p-6 w-full rounded-b-2xl  hover:bg-orange-500 hover:text-white"
                to="/services/consultant"
              >
                Hire a Consultant
              </Link>
            </div>
          </div>
          <Link to="/portfolio">
            <button
              className={
                "text-white hover:bg-orange-700 rounded-3xl w-24 h-8 border " +
                (location.pathname === "/portfolio"
                  ? "border-white"
                  : "border-black")
              }
            >
              Portfolio
            </button>
          </Link>
          <Link to="/about">
            <button
              className={
                "text-white hover:bg-orange-700 rounded-3xl w-24 h-8 border " +
                (location.pathname === "/about"
                  ? "border-white"
                  : "border-black")
              }
            >
              About Us
            </button>
          </Link>
          <Link to="/contact">
            <button
              className={
                "bg-orange-700 text-white hover:bg-orange-600 rounded-3xl w-24 h-8 border " +
                (location.pathname === "/contact"
                  ? "border-white"
                  : "border-black")
              }
            >
              Let´s Talk
            </button>
          </Link>
          <div className="m-auto">
            <Link to="/facebook">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-white hover:text-orange-500 text-2xl"
              />
            </Link>
            <Link to="/instagram">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white hover:text-orange-500 text-2xl mx-4"
              />
            </Link>
            <Link to="/linkedin">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white hover:text-orange-500 text-2xl"
              />
            </Link>
          </div>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background: linear-gradient(100deg, rgb(219 234 254), rgb(96 165 250)); 
      }
    `}</style>
    </div>
  );
}
