import React from 'react'
import Image from 'next/image'

const Content = () => {
  const line1 = "OA, WHICH STANDS FOR ODD ATELIER, IS A SPACE"
  const line2 = "THAT AIMS TO CREATE NEW THINGS THAT ATTRACT"
  const line3 = "ATTENTION IN A DIFFERENT WAY FROM WHAT IS"
  const line4 = "USUAL OR EXPECTED. IT IS A LABEL FOUNDED BY"
  const line5 = "ARTIST JENNIE IN NOVEMBER 2023."

  return (
    <div className='py-[12rem]'>

    <Image 
        src={"/logo_type.png"}
        alt='logo'
        height={100}
        width={200}
        className='block ml-auto mr-auto my-[2.1rem]'
    />

    <p className='font-sweetsanspro border text-[12px] px-16 border-green-300 text-center py-[1.8rem]' >
      {line1}
      <span className='block'>{line2} </span>
      <span className='block'>{line3} </span>
      <span className='block'>{line4} </span>
      <span className='block'>{line5} </span>
      

    </p>
    
    <a href="#" className='w-full text-center block font-sweetsanspro text-[12px]'>CONTACT@ODDATELIER.NET</a>
    
    </div>

    
  )
}

export default Content