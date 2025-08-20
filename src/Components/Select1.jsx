import React from "react";
import Palampur from "../assets/Bir billing.jpg";
import Selectscard from "./Selectscard";
import Resorts1 from "../assets/Shimla.jpg";
import Resorts2 from "../assets/kangra1.2.jpg";
import Pic from "../assets/Manali.jpg";
import Pic2 from "../assets/Dharamshala.jpg";
import Pic3 from "../assets/spiti.jpg"

const selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-8 grid sm:grid-cols-2 lg:grid-cols-3  gap-4 ">
      <Selectscard bg={Resorts1} text="Shimla" />
      <Selectscard bg={Palampur} text="Palampur" />
      <Selectscard bg={Resorts2} text="Kangra" />
      
      <Selectscard bg={Pic} text="Manali" />
      <Selectscard bg={Pic2} text="Dharamshala" />
      <Selectscard bg={Pic3} text="Spiti" />
    </div>
  );
};

export default selects;
