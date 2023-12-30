import React from 'react'
import Image from 'next/image'

const Content = () => {
  return (
    <div>
    <div>
    <Image 
        src={"/logo_type.png"}
        alt='logo'
        height={100}
        width={200}
        className='block ml-auto mr-auto my-12'
    />

    </div>
    <p className='border border-green-300 text-center' >
        OA, WHICH STANDS FOR ODD ATELIER, IS A SPACE
        THAT AIMS TO CREATE NEW 
        <br />
        THINGS THAT ATTRACT
        ATTENTION IN A DIFFERENT WAY FROM WHAT IS
        USUAL OR 
        <br />
        EXPECTED. IT IS A LABEL FOUNDED BY
        ARTIST JENNIE IN NOVEMBER 2023.

    </p>
    </div>
  )
}

export default Content