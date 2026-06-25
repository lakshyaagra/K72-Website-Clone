import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex items-center font-[font2] justify-center gap-2 text-white mt-52 lg:mt-2'>
      <div className='hover:border-[#d3fd50] hover:text-[#d3fd50] border-2 lg:border-3 lg:h-24 uppercase border-white rounded-full pt-3 px-8.25 '>
        <Link className='lg:text-[6.55vw] text-[8vw] leading-[5.5vw]' to='/projects'>PROJECTS</Link>
      </div>
      <div className='hover:border-[#d3fd50] hover:text-[#d3fd50] border-2 lg:border-3 lg:h-24 uppercase border-white rounded-full pt-3 px-8.25 '>
        <Link className='lg:text-[6.55vw] text-[8vw] leading-[5.5vw]' to='/agence'>Agence</Link>
      </div>    
    </div>
  )
}

export default HomeBottomText