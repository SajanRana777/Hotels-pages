import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md";
const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-15">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>

          <p className="py-4"> 
            Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at TRAVELS HOTEL. Our luxury hotels, set along
            he most gorgeous tropical settings and exquisite hotels in Kangra, Palampur, Dharamshala, Jawalamukhi, and every land and water
            sports, including complimentary green fees at our golf resorts and
            certified Paraglieding at most resorts.
            
          </p>
        </div>

        <div className=" grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex:col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill  size={45}/>
            </button>

            <div>
              <h3 className="py-2">LEADING SERVICES</h3>
              <p className="py-1">ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
          <div className="sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex:col lg:flex-row items-center text-center">
            <button>
              <MdOutlineExplore size={45} />
            </button>
          
          <div>
            <h3 className="py-2">LEADING SERVICES</h3>
            <p className="py-1">ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
          </div>

          
        </div>
      </div>
      <div>right</div>
    </div>
  );
};

export default Search;
