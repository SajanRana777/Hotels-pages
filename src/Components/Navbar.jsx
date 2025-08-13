import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setlogo] = useState(false);
  const handlNav = () => {
    setNav(!nav);
    setlogo(!logo);
  };

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 p-4  absolute z-10 text-white">
      <div>
        <h1 onClick={handlNav} className={logo ? "hidden" : "block"}>
          {" "}
          TRAVELS.
        </h1>
      </div>

      <ul className=" hidden md:flex text-black  text-lg ">
        <li>Home </li>
        <li>Destinations</li>
        <li>Travels</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className=" hidden md:flex p-1">
        <BiSearch size={20} />
        <BsPerson size={20} />
      </div>

      {/*Media */}

      <div onClick={handlNav} className="md:hidden z-10 black">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 className="text-black" size={25} />
        )}
      </div>

      {/*Mobile Menu dropdown*/}
      <div
        onClick={handlNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1> TRAVELS.</h1>
          <li className="border-b">Home </li>
          <li className="border-b">Destinations</li>
          <li className="border-b">Travels</li>
          <li className="border-b">View</li>
          <li className="border-b">Book</li>
          <div className=" flex flex-col">
            <button className="my-6"> Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
