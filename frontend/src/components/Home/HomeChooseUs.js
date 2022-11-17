import React from "react";
import ChooseUs from "../../assets/9bf968f01c0375828369586255138062.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faPeopleGroup,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export default function HomeChooseUs() {
  const { t } = useTranslation();
  return (
    <>
      <section className="MOBILE-MENU lg:hidden h-5/6 mb-12 flex flex-col items-center sm:mb-20">
        <h3 className="text-3xl md:text-5xl mb-10 text-orange-500 font-semibold">
          {t("home.chooseUs.title")}
        </h3>
        <img
          src={ChooseUs}
          alt="people and a screen"
          className="w-56 md:w-1/2 h-60 md:h-58 rounded-tl-3xl rounded-br-3xl object-cover"
        />
        <h5 className="my-6 md:my- text-2xl md:text-3xl text-fuchsia-900 font-bold md:w-4/5 md:ml-auto">
          {t("home.chooseUs.passion")}
        </h5>
        <div className="flex w-4/5 items-center md:ml-auto sm:ml-auto">
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="h-7 md:h-10 w-6 md:w-10 text-fuchsia-900 mr-4"
          />
          <div>
            <h6 className="text-lg md:text-xl text-fuchsia-900 font-bold">
              {t("home.chooseUs.dependable")}
            </h6>
            <p className="text-fuchsia-900 text-sm md:text-base">
              {t("home.chooseUs.collaborate")}
            </p>
          </div>
        </div>
        <div className="flex w-4/5 my-6 md:my-8 items-center md:ml-auto sm:ml-auto">
          <FontAwesomeIcon
            icon={faPeopleGroup}
            className="h-8 w-8  md:h-10 md:w-12 -ml-[5px] text-fuchsia-900 mr-3"
          />
          <div>
            <h6 className="text-lg md:text-xl text-fuchsia-900 font-bold">
              {t("home.chooseUs.dedicated")}
            </h6>
            <p className="text-fuchsia-900 text-sm md:text-base">
              {t("home.chooseUs.results")}
            </p>
          </div>
        </div>
        <div className="flex w-4/5 items-center md:ml-auto sm:ml-auto">
          <FontAwesomeIcon
            icon={faPhone}
            className="h-8 w-6 md:h-10 md:w-10 text-fuchsia-900 mr-4"
          />
          <div>
            <h6 className="text-lg md:text-xl text-fuchsia-900 font-bold">
              {t("home.chooseUs.support")}
            </h6>
            <p className="text-fuchsia-900 text-sm md:text-base">
              {t("home.chooseUs.help")}
            </p>
          </div>
        </div>
      </section>

      <section
        className="DESKTOP-MENU hidden h-screen lg:flex 
      flex-col items-center"
      >
        <h3 className="text-5xl mb-16 text-orange-500 font-semibold">
          {t("home.chooseUs.title")}
        </h3>
        <div className="flex h-screen w-5/6 justify-between">
          <img
            src={ChooseUs}
            alt="people and a screen"
            className="w-1/2 h-4/5 rounded-tl-3xl rounded-br-3xl"
          />
          <div className="flex flex-col justify-between h-4/5 w-1/2 items-center">
            <h5 className="text-4xl text-fuchsia-900 font-bold mr-12">
              {t("home.chooseUs.passion")}
            </h5>
            <div className="flex w-4/5 items-center mt-12">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="h-12 w-10 text-fuchsia-900 mr-4"
              />
              <div>
                <h6 className="text-2xl text-fuchsia-900 font-bold">
                  {t("home.chooseUs.dependable")}
                </h6>
                <p className="text-fuchsia-900 text-lg">
                  {t("home.chooseUs.collaborate")}
                </p>
              </div>
            </div>
            <div className="flex w-4/5 my-12 items-center">
              <FontAwesomeIcon
                icon={faPeopleGroup}
                className="h-12 w-12 -ml-[5px] text-fuchsia-900 mr-3"
              />
              <div>
                <h6 className="text-2xl text-fuchsia-900 font-bold">
                  {t("home.chooseUs.dedicated")}
                </h6>
                <p className="text-fuchsia-900 text-lg">
                  {t("home.chooseUs.results")}
                </p>
              </div>
            </div>
            <div className="flex w-4/5 items-center">
              <FontAwesomeIcon
                icon={faPhone}
                className="h-12 w-10 text-fuchsia-900 mr-4"
              />
              <div>
                <h6 className="text-2xl text-fuchsia-900 font-bold">
                  {t("home.chooseUs.support")}
                </h6>
                <p className="text-fuchsia-900 text-lg">
                  {t("home.chooseUs.help")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
