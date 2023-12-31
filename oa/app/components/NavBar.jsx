import React from 'react';
import Image from 'next/image';

const NavBar = () => {
  return (
    <React.Fragment>
      <main className="flex flex-row justify-between pb-10 sticky top-0 border border-purple-500">
        <a href='' className="text-red-300 ml-4 my-2 h-20 w-20 pt-3 text-center">
          <Image 
            src= "/oa-logo.jpg"
            width={100}
            height={100}
            alt="burger" 
            className='' 
            />
          
        </a>

        <div className='flex flex-col border border-purple-300'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
            className="invert-[.25] w-8 h-8 ml-auto mt-4 mr-4 transistion duration-50 hover:invert-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>

          <a href='#' className="mr-8 ">ODDATELIER</a>
          <a href='#' className="mr-8 ">ARTIST</a>
          <a href='#' className="mr-8 ">NEWS</a>

        </div>
      </main>
    
    </React.Fragment>
  )
}

export default NavBar