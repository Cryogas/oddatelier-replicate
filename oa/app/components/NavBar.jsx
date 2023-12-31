import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const NavBar = () => {
  return (
    <React.Fragment>
    <Head>
      <title>Hello</title>
    </Head>
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
            className="invert-[.25] w-8 h-8 ml-auto mt-4 mr-4 transistion duration-50 hover:invert-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>

          <a href='#' className="mr-2 ">ODDATELIER</a>
          <a href='#' className="mr-2 ">ARTIST</a>
          <a href='#' className="mr-2 ">NEWS</a>

        </div>
      </main>
    
    </React.Fragment>
  )
}

export default NavBar