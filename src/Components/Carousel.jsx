import React, { useState } from "react";
import { BsArrowLeftSquareFill,BsArrowRightSquareFill } from "react-icons/bs";
const sliderData = [
  {
    url: "https://th.bing.com/th/id/R.986ce046ad199c56441651d730ed2bfc?rik=MjvvEuiHd%2f9kWw&riu=http%3a%2f%2fmedia.cntraveller.in%2fwp-content%2fuploads%2f2017%2f01%2fspiti-lead-image.jpg&ehk=Hx0T7uHdw3ZmfjaDWZrbjb%2fGksyotA4tGN53M1h%2fb%2fo%3d&risl=&pid=ImgRaw&r=0",
  },
    
  

  {
    url: "https://theadventurenomads.com/wp-content/uploads/2018/03/1560701627_gopr0921.jpg",
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
