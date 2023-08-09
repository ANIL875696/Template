import React from 'react'
import img2 from "../assets/img2.jpg"
const Blogs = () => {
  return (
    <>
     <section className='  w-full min-h-full mt-4 p-4'>
       <div className=' bg-gray-700'>
       <div className='flex justify-center '>
            <h1 className='text-bold text-white pb-3 py-[-10px] '>Blogs Section</h1>
        </div>
        <div className='grid lg:grid-cols-5 md:grid-cols-2 lg:p-5 sm:p-3 xs:pl-3 gap-3 md:gap-4 pt-3'>
        <div className='p-4  rounded-md hover:shadow-sm hover:shadow-white md:bg-white bg-white '>
<div className=' '>
<div className=' flex justify-center pb-3'>
<img src={img2} alt="" className='rounded-md hover:shadow-lg hover:shadow-white sm:p-4' />
</div >
<p className='text-gray-900 font-semibold hover:text-green-600'>Lorem ipsum dolor, sit amet consectetur adipisicing </p>
        </div>
</div>
        <div className='p-4  rounded-md hover:shadow-sm hover:shadow-white bg-white '>
<div className=' '>
<div className=' flex justify-center pb-3'>
<img src={img2} alt="" className='rounded-md hover:shadow-lg hover:shadow-white' />
</div >
<p className='text-gray-900 font-semibold hover:text-green-600'>Lorem ipsum dolor, sit amet consectetur adipisicing </p>
        </div>
</div>
        <div className='p-4  rounded-md hover:shadow-sm hover:shadow-white bg-white '>
<div className=' '>
<div className=' flex justify-center pb-3'>
<img src={img2} alt="" className='rounded-md hover:shadow-lg hover:shadow-white' />
</div >
<p className='text-gray-900 font-semibold hover:text-green-600'>Lorem ipsum dolor, sit amet consectetur adipisicing </p>
        </div>
</div>
        <div className='p-4  rounded-md hover:shadow-sm hover:shadow-white bg-white '>
<div className=' '>
<div className=' flex justify-center pb-3'>
<img src={img2} alt="" className='rounded-md hover:shadow-lg hover:shadow-white' />
</div >
<p className='text-gray-900 font-semibold hover:text-green-600'>Lorem ipsum dolor, sit amet consectetur adipisicing </p>
        </div>
</div>
        <div className='p-4  rounded-md hover:shadow-sm hover:shadow-white bg-white '>
<div className=' '>
<div className=' flex justify-center pb-3'>
<img src={img2} alt="" className='rounded-md hover:shadow-lg hover:shadow-white' />
</div >
<p className='text-gray-900 font-semibold hover:text-green-600'>Lorem ipsum dolor, sit amet consectetur adipisicing </p>
        </div>
</div>
        </div>
       </div>
        </section> 
    </>
  )
}

export default Blogs
