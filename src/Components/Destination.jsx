import React from "react";
import Resorts1 from "../assets/Shimla.jpg";
import Resorts2 from "../assets/kangra1.2.jpg";
import Pic from "../assets/Manali.jpg";
import Pic2 from "../assets/Dharamshala.jpg";
import Pic3 from "../assets/Bir billing.jpg";

const Destination = () => {
  return (
    <div className=" max-w-[1240px ]  mx-auto py-16 px-4 text-center">
      <h1> All-Inclusive Restors</h1>
      <p className="py-4"> On the Corlbbean's Best Beaches </p>

      <div className=" grid grid-rows-none  md:grid-cols-5  py-4 gap-2  md:gap-4 ">
        <div className="relative">
          <img
            className="w-full h-full object-cover  col-span-2 md:col-span-3  row-span-2 "
            src={Resorts1}
            alt="/"
          />
          <div className=" bg-gray-900/30 absolute top-0 left-0 w-full h-full">
            <p className="left-3 bottom-3 text-2xl font-bold text-white absolute">
              {" "}
              Shimla
            </p>
          </div>
        </div>
        <div className="relative">
          <img className="w-full h-full object-cover " src={Resorts2} alt="" />
          <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
            <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
              
              Kangra
            </p>
          </div>
        </div>
        <div className="relative">
          <img className="w-full h-full object-cover " src={Pic} alt="/" />
          <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
            <p className="left-3 bottom-3 text-2xl font-bold text-white absolute">
              
              Manali
            </p>
          </div>
        </div>
        <div className="relative">
          <img className="w-full h-full object- cover" src={Pic2} alt="/" />
          <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
            <p className="left-3 bottom-3 text-2xl font-bold text-white absolute">
              
              Dharamshala
            </p>
          </div>
        </div>

        <div className="relative">
          <img className="w-full h-full object- cover" src={Pic3} alt="/" />
          <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
            <p className="left-3 bottom-3 text-2xl font-bold text-white absolute">
              
              Bir Billing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
