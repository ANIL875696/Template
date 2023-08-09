import React from 'react'
import {BsFacebook,BsInstagram,BsTwitter,BsGithub,BsLinkedin} from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className=' w-full  h-full p-4 '>
<div className='bg-gray-700 p-3 min-h-24'>
<div className='bg-gray-900 border-b-1 border-gray-800 p-2'>
<div className=' md:flex md:justify-between justify-center items-center md:h-24 md:gap-0 gap-3'>
<h1 className='md:text-3xl text-[16px] text-white '> Free Until You Are Ready To Launch</h1>
<div className='flex flex-col md:flex-row px-9 gap-2'>
  <input type="search" placeholder='Enter Your Mobile NO.' className='rounded-md  placeholder-blue-950 outline-none  w-3/4 md:w-80 p-2 ' />
  <button type="button" className=' bg-sky-400 hover:bg-sky-500 text-black rounded-md font-semibold w-3/4 md:p-0 p-1 md:w-28 md:ml-3 '>request code</button>
</div>

</div>
</div>
<div className='' >
  <div className=' bg-black  w-full min-h-full ' >
    <div className='p-3' >
    <div className=' grid md:grid-cols-4 grid-cols-1 flex-col md:flex-row   font-semibold flex  items-between md:ml-28 ml-20 mb-4'>
<div className=' gap-1 flex flex-col'>
<div className='mt-3'>
 <h className='text-2xl md:pb-3 pb-1 text-white'>PRODUCTS</h>
 </div>
  <h>Drag and Drop</h>
  <h>visual Studio X</h>
  <h>Easy Content</h>
  
</div>
<div className='gap-1 flex flex flex-col '>
  <div className='mt-3'>
 <h className='text-2xl md:pb-3 pb-1 text-white'>RESOURCES</h>
 </div>
  <h>Online Communities</h>
  <h>Use Cases</h>
  <h>Blog</h>
  <h>Online Events</h>
</div>
<div className='gap-1 flex flex-col'>
 <div className='mt-3'>
 <h className='text-2xl md:pb-3 pb-1 text-white'>COMPONY</h>
 </div>
  <h>Diversity & Inclusion</h>
  <h>About Us</h>
  <h>Press</h>
  <h>Customer Stories</h>
</div>
<div className=' gap-1 flex flex-col'>
 <div className='mt-3'>
 <h className='text-2xl md:pb-3 pb-1 text-white'>SUPPORT</h>
 </div>
  <h>Documentation</h>
  <h>Tutorial & Guide</h>
  <h>Webinar</h>
  <h>Open-source</h>
</div>
</div>
<div className='p-3 mt-6'>
      
    <div className=' md:flex grid md:grid-cols-3 grid-cols-1 justify-between mx-auto text-current md:m-0  md:gap-0'>
    <div className='pl-6'>
    <h1 className='text-sm block'>2023 Apply all rights reserve</h1>
    </div>
          
         <div className='pl-6'>
         <h1 className='text-sm'>Term and condition & Privacy Policy</h1>
         </div >
                
                 <div className='flex pl-2 text-2xl text-sky-400 '>
           <BsFacebook  className='pl-2 text-3xl hover:text-sky-500'/>
           <BsInstagram className='pl-2 text-3xl hover:text-sky-500'/>
           <BsTwitter className='pl-2 text-3xl hover:text-sky-500'/>
           <BsGithub className='pl-2 text-3xl hover:text-sky-500'/>
           <BsLinkedin className='pl-2 text-3xl hover:text-sky-500'/>
     
                 </div>
    </div>
          </div>
    </div>
    
  </div>


  
</div>

</div>
      </footer>
    </>
  )
}

export default Footer
