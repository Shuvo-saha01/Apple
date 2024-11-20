import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [dropToggle, setDropToggle] = useState(false);

  const toggle = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const menuToggle = () => {
    setDropToggle (!dropToggle)
    if(dropToggle){
      document.querySelector('#dropDown').classList.remove('hidden')
      document.querySelector('#dropDown').classList.add('flex')
    }else {
      document.querySelector('#dropDown').classList.remove('flex')
      document.querySelector('#dropDown').classList.add('hidden')
    }
  }

  let slides = [
    "./images/Carousal.png",
    "./images/Carousal.png",
    "./images/Carousal.png",
    "./images/Carousal.png",
    "./images/Carousal.png",
  ];

  return (
    <div id="body" className="  dark:bg-black overflow-x-hidden">
      <div className="mt-3 px-3 md:px-5 md:flex hidden justify-between dark:bg-black">
        <div id="logo" className="flex w-60">
          <img className="dark:hidden" src="./images/logoLight.png" alt="" />
          <img
            className="dark:block hidden"
            src="./images/logoDark.png"
            alt=""
          />
          <h1 className="font-poppins my-auto text-lg ms-2 dark:text-white ">
            Apple Haven
          </h1>
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
          <button onClick={toggle} className="my-auto ms-auto">
            <img
              className="dark:hidden ms-auto"
              src="./images/dark_mode.png"
              alt=""
            />
          </button>
          <button onClick={toggle} className="my-auto ms-auto">
            <img
              className="ms-auto hidden dark:block"
              src="./images/darkButtonDark.png"
              alt=""
            />
          </button>
        </div>
      </div>
      <div id="mobileBody" className="mt-2 px-3 md:px-5 md:hidden">
        <div>
          <div className="flex justify-between">
            <div id="logo" className="flex w-60">
              <img
                className="dark:hidden"
                src="./images/logoLight.png"
                alt=""
              />
              <img
                className="dark:block hidden"
                src="./images/logoDark.png"
                alt=""
              />
              <h1 className="font-poppins my-auto text-xl ms-2 dark:text-white">
                Apple Haven
              </h1>
            </div>
            <div id="darkMode" className="flex">
              <button onClick={toggle}>
                <img
                  src="./images/dark_mode.png"
                  className="my-auto dark:hidden"
                  alt=""
                />
              </button>
              <button onClick={toggle}>
                <img
                  src="./images/darkButtonDark.png"
                  className="my-auto hidden dark:block"
                  alt=""
                />
              </button>
              <button id="menu" onClick={menuToggle}>
                <img
                  src="./images/menu-line.png"
                  className="ms-3 dark:hidden"
                  alt="menu line"
                />
                <div
                  id="dropDown"
                  className= "hidden flex-col bg-slate-200 font-poppins absolute z-10 text-lg right-3 rounded-lg p-4 overflow-hidden"
                >
                  <div className="mt-2"><a href="">Home</a></div>
                  <div className="mt-2"><a href="">Services</a></div>
                  <div className="mt-2"><a href="">Products</a></div>
                  <div className="mt-2"><a href="">Contacts</a></div>
                  
                  
                  
                  
                </div>
              </button>

              <button>
                <img
                  src="./images/darkMenu.png"
                  className="ms-3 dark:block hidden"
                  alt="menu line"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-black mt-3 md:drop-shadow-lg" />
      <div id="carousal" className="w-full ">
        <Carousel slides={slides} />
      </div>

      <div
        id="Services"
        className="mt-[60px] md:mt-[100px] overflow-x-hidden max-w-screen mx-auto dark:text-white"
      >
        <h1 className="text-3xl md:text-5xl font-medium font-poppins dark:text-white text-center">
          Our Services
        </h1>
        <div className="grid gap-0 gap-y-5 grid-flow-row md:grid-flow-col text-center mt-10">
          <div className="">
            <img
              className="mx-auto mb-5 max-w-full h-auto"
              src="./images/delivery.png"
              alt="Delivery"
            />
            <h1 className="text-2xl mb-1 font-poppins font-semibold">
              FREE AND FAST DELIVERY
            </h1>
            <h1 className="text-xl">Free delivery for all orders over $140</h1>
          </div>
          <div className="">
            <img
              className="mx-auto mb-5 max-w-full h-auto"
              src="./images/headphone.png"
              alt="Customer Service"
            />
            <h1 className="text-2xl mb-1 font-poppins font-semibold">
              24/7 CUSTOMER SERVICE
            </h1>
            <h1 className="text-xl">Friendly 24/7 customer support</h1>
          </div>
          <div className="">
            <img
              className="mx-auto mb-5 max-w-full h-auto"
              src="./images/moneyBack.png"
              alt="Money Back"
            />
            <h1 className="text-2xl mb-1 font-poppins font-semibold">
              MONEY BACK GUARANTEE
            </h1>
            <h1 className="text-xl">We return money within 30 days</h1>
          </div>
        </div>
      </div>

      <div id="products" className="mt-[60px] md:mt-[100px]">
        <h1 className="text-3xl md:text-5xl font-medium  font-poppins dark:text-white text-center">
          Products
        </h1>
        <div className="hidden md:flex justify-center mt-10 gap-[80px]">
          <button>
            <div className="flex flex-col justify-center items-center border-black border-2 rounded-xl w-[140px] h-[120px]">
              <img className="" src="./images/phoneBlack.png" alt="" />
              <h1 className="text-black font-poppins text-xl">Phones</h1>
            </div>
          </button>
          <button>
            <div className="flex flex-col justify-center items-center border-black border-2 rounded-xl w-[140px] h-[120px]">
              <img className="" src="./images/laptopBlack.png" alt="" />
              <h1 className="text-black font-poppins text-xl">Laptops</h1>
            </div>
          </button>
          <button>
            <div className="flex flex-col justify-center items-center border-black border-2 rounded-xl w-[140px] h-[120px]">
              <img className="" src="./images/watchBlack.png" alt="" />
              <h1 className="text-black font-poppins text-xl">Watches</h1>
            </div>
          </button>
          <button>
            <div className="flex flex-col justify-center items-center border-black border-2 rounded-xl w-[140px] h-[120px]">
              <img className="" src="./images/pcBlack.png" alt="" />
              <h1 className="text-black font-poppins text-xl">Computers</h1>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
