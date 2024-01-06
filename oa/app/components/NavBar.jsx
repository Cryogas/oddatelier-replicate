import React from 'react';
import Image from 'next/image';

const NavBar = () => {


  return (
    <>
      <main className="flex flex-row justify-between pb-10 sticky top-0 border border-purple-500">
        <a href='' className="text-red-300 ml-4 h-20 w-20 text-center">
          <Image 
            src= "/oa-logo.png"
            width={80}
            height={80}
            alt="burger" 
            className='invert' 
            />
          
        </a>

        <div className='flex flex-col border border-purple-300 font-sweetsanspro text-right'>

        <div className='flex flex-col py-4 ml-auto mr-3'>
          <div className='bg-slate-100 h-[3px] w-9 my-1'></div>
          <div className='bg-slate-100 h-[3px] w-9 my-1'></div>
        </div>
          

          <a href='#' className="mr-2 ">ODDATELIER</a>
          <a href='#' className="mr-2 ">ARTIST</a>
          <a href='#' className="mr-2 ">NEWS</a>

        </div>
      </main>
    
    </>
  )
}

export default NavBar