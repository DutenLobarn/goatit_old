import React from "react";

import Logo from "../assets/4.png";

export default function Contact() {
  return (
    <>
      <div className="MOBILE-MENU sm:px-20 md:px-40">
        <h1 className="text-3xl md:text-5xl my-9 text-orange-500 font-semibold text-center">
          Contact Us
        </h1>
        <section className="bg-fuchsia-900 rounded-t-3xl p-6 h-5/6 text-white flex justify-center xl:px-0">
          <div>
            <p className="text-lg font-semibold lg:w-5/6">
              Fill in the form and our team will respond to you within 24 hours.
            </p>
            <form className="w-full mt-6 flex flex-col lg:w-5/6">
              <label className="flex flex-col space-around justify-evenly mb-4 h-20 font-semibold">
                Your Name:
                <input
                  className="mt-1 h-10 rounded font-thin text-white border-2 border-black text-black"
                  type="text"
                  name="name"
                  placeholder="Fullname"
                />
              </label>
              <label className="flex flex-col space-around justify-evenly mb-4 h-20 font-semibold">
                Mail:
                <input
                  className="mt-1 h-10 rounded font-thin text-white border-2 border-black text-black"
                  type="email"
                  name="email"
                  placeholder="Email@email.com"
                />
              </label>
              <label className="flex flex-col space-around justify-evenly mb-6 font-semibold">
                Message:
                <textarea
                  className="mt-2 h-32 rounded font-thin text-white border-2 border-black text-black lg:h-24"
                  placeholder="Message"
                />
              </label>
              <input
                className="bg-orange-700 m-auto px-6 py-3 font-semibold border-black hover:bg-orange-600 hover:border-white rounded-3xl border"
                type="submit"
                value="Send Message"
              />
            </form>
          </div>
          <img
            className="w-5/12 mr-10 hidden lg:flex xl:w-4/12"
            src={Logo}
            alt="logo"
          />
        </section>
      </div>
      <div className="DESKTOP-MENU hidden lg:flex"></div>
    </>
  );
}
