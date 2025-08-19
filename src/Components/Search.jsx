import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md";
const Search = () => {
  return (
    <div className="bg-gray-300">
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-15">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>

          <p className="py-4">
            Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at TRAVELS HOTEL. Our luxury hotels, set along
            he most gorgeous tropical settings and exquisite hotels in Kangra,
            Palampur, Dharamshala, Jawalamukhi, and every land and water sports,
            including complimentary green fees at our golf resorts and certified
            Paraglieding at most resorts.
          </p>
        </div>

        <div className=" grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex:col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={45} />
            </button>

            <div>
              <h3 className="py-2">LEADING SERVICES</h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
          <div className="sm:grid-cols-2 gap-8 py-4">
            <div className="flex flex:col lg:flex-row items-center text-center">
              <button>
                <MdOutlineExplore size={45} />
              </button>

              <div>
                <h3 className="py-2">LEADING SERVICES</h3>
                <p className="py-1">
                  ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="border text-center ">
          <p className="border-b bg-gray-200" > GET AN ADDITIONAL 10% OFF</p>
          <p className="py-3"> 12 HOURS LEFT </p>
          <p className="bg-gray-800  text-gray-200"> BOOK NOW AND SAVE</p>
        </div>

        <form  className="w-full">
          <div className="flex flex-col  my-4">
            <label>Destination</label>
            <select className="border rounded-md p-2" >
              <option>None</option>
              <option>Kangra</option>
              <option>Palampur</option>
              <option>Dharamshala</option>
              <option>Jawalamukhi</option>
              <option>Bir Billing</option>
            </select>
          </div>
          <div className="flex flex-col my-4 ">
            <label>Check-in</label>
            <input type="date"  className="border rounded-md p-2"/>
          </div>
          <div className="flex flex-col my-4">
            <label>Check-Out</label>
            <input type="date"  className="border rounded-md p-2"/>
          </div>
          <button className=" w-full my-4">Rate & Availabilities</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Search;
