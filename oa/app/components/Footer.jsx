import React from 'react'




const Footer = () => {
  const line1 = "© ODDATELIER. ALL RIGHTS RESERVED."
  const line2 = "ALL OF ODDATELIER’S CONTENT IS COPYRIGHTED."
  
  return (
    <footer className='fixed bottom-0 pb-4 w-full flex justify-center border border-white'>
      <div className='lg:flex lg:flex-col items-cen'>
        <h3 className=' border border-red-300 font-sweetsanspro text-[10px] xl:text-[12px] whitespace-pre-line lg:whitespace-normal text-center'>
          {line1}
          <span className='block xl:inline'> {line2}</span>
        </h3>
      </div>
    </footer>
    )
}

export default Footer