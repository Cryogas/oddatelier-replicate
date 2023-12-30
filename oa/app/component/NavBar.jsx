import React from 'react';
import Image from 'next/image';

const NavBar = () => {
  return (
    <React.Fragment>
      <main className="flex flex-row justify-between pb-10">
        <a href='' className="text-red-300 border border-red-400 ml-4 my-2 h-20 w-20 pt-3 text-center">
          <Image 
            src= "/oa-logo.jpg"
            width={100}
            height={100}
            alt="burger" 
            className='' 
            />
          
        </a>

        <div className='flex flex-col'>
          <Image 
            src= "/menu-burger.png"
            width={100}
            height={100}
            alt="burger" 
            className='invert block border ' 
            />
          <a href='#' className="mr-8">ODDATELIER</a>
          <a href='#' className="mr-8">ARTIST</a>
          <a href='#' className="mr-8">NEWS</a>

        </div>
      </main>
    
    </React.Fragment>
  )
}

export default NavBar