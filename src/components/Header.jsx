import React from "react";
import Carousel from "./Carousel";

function Header() {
  let slides = [
    "./images/Carousal.png",
    "./images/Carousal.png",
    "./images/Carousal.png",
    "./images/Carousal.png",
    "./images/Carousal.png",
  ]

  return (
    <div id="body" className="  dark:bg-black">
      <div className="mt-3 px-3 md:px-5 md:flex hidden justify-between dark:bg-black">
        <div id="logo" className="flex w-60">
          <img className="dark:hidden" src="./images/logoLight.png" alt="" />
          <img className="dark:block hidden" src="./images/logoDark.png" alt="" />
          <h1 className="font-poppins my-auto text-lg ms-2 dark:text-white ">Apple Haven</h1>
        </div>
        <div
          id="content"
          className="grid grid-flow-col gap-4 font-medium text-2xl dark:text-white my-auto font-poppins"
        >
          <div>Home</div>
          <div>Services</div>
          <div>Products</div>
          <div>Contact</div>
        </div>
        <div className="w-40 flex justify-start">
          <button className="my-auto ms-auto"><img
            className="dark:hidden ms-auto"
            src="./images/dark_mode.png"
            alt=""
          /></button>
          <button className="my-auto ms-auto"><img
            className="ms-auto hidden dark:block"
            src="./images/darkButtonDark.png"
            alt=""
          /></button>
        </div>
      </div>
      <div id="mobileBody" className="mt-2 px-3 md:px-5 md:hidden">
        <div>
          <div className="flex justify-between">
            <div id="logo" className="flex w-60">
              <img className="dark:hidden" src="./images/logoLight.png" alt="" />
              <img className="dark:block hidden" src="./images/logoDark.png" alt="" />
              <h1 className="font-poppins my-auto text-xl ms-2 dark:text-white">
                Apple Haven
              </h1>
            </div>
            <div id="darkMode" className="flex">
                <button><img src="./images/dark_mode.png" className="my-auto dark:hidden" alt="" /></button>
                <button><img src="./images/darkButtonDark.png" className="my-auto hidden dark:block" alt="" /></button>
                <button><img src="./images/menu-line.png" className="ms-3 dark:hidden" alt="menu line" /></button>
                <button><img src="./images/darkMenu.png" className="ms-3 dark:block hidden" alt="menu line" /></button>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-black mt-3 md:drop-shadow-lg"/>
      <div id="carousal" className="w-full h-screen ">
          <Carousel slides = {slides} />
      </div>
    </div>
  );
}

export default Header;
