import React, { useState } from "react";
import { BsArrowLeftSquareFill,BsArrowRightSquareFill } from "react-icons/bs";
const sliderData = [
  {
    url: "https://media.istockphoto.com/id/1330571985/photo/dirt-road-in-mountains.webp?a=1&s=612x612&w=0&k=20&c=uRd3u5NE1EaIgiEMPz64433aJu4BvVdDiW7p7dJ_QWo=",
  },
    
  {
    url:"https://media.istockphoto.com/id/677723756/photo/snow-hill.webp?a=1&b=1&s=612x612&w=0&k=20&c=vw7_JBVhBHC47tiXU2PyLbgXSDB5Ou3fypJnCDe8Qwc="
  },

  {
    url: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWxzfGVufDB8fDB8fHww",
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0)
  const length = sliderData.length
//  console.log (length)
  const prevSlide =()=>{
setSlide(slide === length - 1 ? 0 : slide + 1 );
  };
  const nextSlide =()=>{
setSlide ( slide === 0 ? length - 1 : slide - 1 );

  };

  return (
    <div className="max-w-[1240px] mx-auto  px-4 py-16 relative flex justify-center items-center">

      <BsArrowLeftSquareFill onClick={prevSlide} className="absolute top-[50%] text-3xl text-Black cursor-pointer  left-8"/>
      <BsArrowRightSquareFill onClick={nextSlide} className="absolute top-[50%] text-3xl text-Black cursor-pointer right-8"/>
      {sliderData.map((item, index) => (
        <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
          {index === slide && (<img className='w-full rounded-md' src={item.url} alt="/" />)}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
