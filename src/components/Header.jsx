import React from "react";

function Header() {
  return (
    <div className=" mt-3 px-3 md:px-5">
      <div className="md:flex hidden justify-between">
        <div id="logo" className="flex w-40">
          <img src="./images/logoLight.png" alt="" />
          <h1 className="font-poppins my-auto text-lg ms-2 ">Apple Haven</h1>
        </div>
        <div
          id="content"
          className="grid grid-flow-col gap-4 font-medium text-2xl my-auto font-poppins"
        >
          <div>Home</div>
          <div>Services</div>
          <div>Products</div>
          <div>Contact</div>
        </div>
        <div className="w-40 flex justify-start">
          <button className="my-auto ms-auto"><img
            className="ms-aut"
            src="./images/dark_mode.png"
            alt=""
          /></button>
        </div>
      </div>
      <div id="mobileBody" className="md:hidden">
        <div>
          <div className="flex justify-between">
            <div id="logo" className="flex w-40">
              <img src="./images/logoLight.png" alt="" />
              <h1 className="font-poppins my-auto text-xl ms-2 ">
                Apple Haven
              </h1>
            </div>
            <div id="darkMode" className="flex">
                <button><img src="./images/dark_mode.png" className="my-auto" alt="" /></button>
                <button><img src="./images/menu-line.png" className="ms-3" alt="menu line" /></button>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-black mt-3 md:drop-shadow-lg"/>
    </div>
  );
}

export default Header;
