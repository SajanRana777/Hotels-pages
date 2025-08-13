import React from 'react'
import Resorts1 from '../assets/download.jpg'
import Resorts2 from '../assets/download (1).jpg'
import Pic from '../assets/download (2).jpg'
import Pic2 from '../assets/download (3).jpg'
import Pic3 from '../assets/download (4).jpg'

const Destination = () => {
  return (
    <div className=' max-w-[1240px ]  mx-auto py-16 px-4 text-center'>

<h1> All-Inclusive Restors</h1>
<p className='py-4'>  On the Corlbbean's Best Beaches </p>

<div className='grid grid-rows-none  md:grid-cols-5  py-4 gap-2  md:gap-4 '>
<img className='w-full h-full object-cover  col-span-2 md:col-span-3  row-span-2 ' src={Resorts1}  alt ="/"/>
<img  className='w-full h-full object-cover ' src={Resorts2} alt="/" />
<img className='w-full h-full object-cover ' src ={Pic} alt="/" />
<img className='w-full h-full object- cover' src= {Pic2} alt ="/" />
<img className='w-full h-full object- cover' src= {Pic3} alt ="/" />

</div>

    </div>
  )
}

export default Destination