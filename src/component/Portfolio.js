import React from 'react'
// import { BsArrowRightShort } from 'react-icons/fa';
import {  BsArrowRightShort } from "react-icons/bs";
import web0 from "../assets/web0.jpg"
const Portfolio = () => {
  return (
    <>
    <div className='w-100 p-4 '>
      <div className='p-11 mx-auto bg-black'>
    <h1 className='text-bold text-white  flex justify-center md:text-3xl text-xl pt-2 shadow'>Web Development</h1>
    <div className='border-b-4 border-rose-600 max-w-[20rem] rounded-md mx-auto'/ >
        <div className='md:flex justify-between'>
        <div className='md:flex text-white font-medium shadow-md my-2   '>
        <div className=' p-4'>
    <h1 className='text-bold text-white md:text-3xl text-xl px-2 justify-center'>Technology Used</h1>
    <div className='px-4'>
    <p className='flex gap-2  items-center '> <BsArrowRightShort/> Html</p>
   <p className='flex gap-2  items-center'>   <BsArrowRightShort/> Css</p>
       <p className='flex gap-2 items-center  '><BsArrowRightShort/> Javascript</p>
      <p className='flex gap-2  items-center '><BsArrowRightShort/>React</p> 
    </div>
    </div>
    </div>
    <div className='md:pt-28'>
        <img src={web0} alt="" className='md:max-w-[350px] md:h-72 h-full w-full object-cover border rounded-2xl' />
    </div>
    </div>

      </div>

    </div>
     
    </>
  )
}

export default Portfolio
