import React from 'react'
import image from '../assets/image1.jpg'

function Header() {
  return (
    <div className='w-full h-screen relative '>
<img src={image} alt='' className='  md:brightness-100 h-full w-full object-cover '/>
      <div className='absolute left-[40%] top-[45%] '>
      <div className='inline-block justify-center items-center '>
      <h1 className='md:text-3xl text-xl font-bold text-black   '>Hello Developers</h1>
      <h2 className='font-bold text-black duration-200 left-[-64px] transition-shadow md:text-xl text-sm bg-blue-700 px-3 rounded-sm'> Hello Guys Welcome to my News blogs Posts</h2>
      </div>
      </div>
</div>
  
  )
}

export default Header
