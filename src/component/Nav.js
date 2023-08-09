import React from 'react'
// import '.'
import { BsSearch } from "react-icons/bs";
import { FaBeer} from 'react-icons/fa';
import '../App.css'
import {Link,BrowserRouter} from "react-router-dom"

const Nav = () => {
  return (
    <>
    <nav>
      <div className="  w-full bg-slate-900 ">
        <div className="flex h-16  justify-between items-center mx-auto px-8">
           <h1 className='text-white font-bold md:text-4xl sm:text-md xs:text-sm  px-3 pt-2 '>Developer</h1>

            <div className=" mx-auto hidden md:flex">
             
             <ul  className='flex   text-white font-bold '>
              <li className='px-4 pt-2 hover:text-[15px] hover:text-violet-500 hover:cursor-pointer '>Home</li>
              <li className='px-4 pt-2 hover:text-[15px] hover:text-violet-500 hover:cursor-pointer '>About</li>
              <li className='px-4 pt-2 hover:text-[15px] hover:text-violet-500 hover:cursor-pointer '>Contact</li>
            
             <li className='px-4 pt-2 hover:text-[15px] hover:text-violet-500  hover:cursor-pointer '> Login</li>
            
              

             </ul>
            </div>
             <div className=' flex gap-2 '>
              <FaBeer size={30} className='text-gray-300 font-bold  hover:text-3xl hover:text-violet-500 text-3xl hover:cursor-pointer ' />
            <BsSearch className='text-gray-300 font-bold items-end justify-end hover:text-3xl hover:text-violet-500 text-3xl hover:cursor-pointer mr-2' size={30}/>
          </div>
          </div>
           
          
           
        </div>
      </nav>
      
     
    </>
  )

}

export default Nav
