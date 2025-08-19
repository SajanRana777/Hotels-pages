import React from 'react'

const Selectscard = (props) => {
  return (
     <div className="relative" >

                <img  className="w-full h-full object-cover " src={props.bg} alt='/' />
                <div className='bg-gray-900/30 absolutet   w-full'>
                    <p className=' left-4 bottom-4 text-2xl font-bold text-white  absolute'>
                        {props.text}</p>
                </div>
            </div>
  )
}

export default Selectscard