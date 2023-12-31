import React from 'react'




const Footer = () => {
  const line1 = "© ODDATELIER. ALL RIGHTS RESERVED."
  const line2 = "ALL OF ODDATELIER’S CONTENT IS COPYRIGHTED."
  
  return (
    <footer className='fixed bottom-0 pb-4 w-full flex justify-center'>
      <div className='ml-4 lg:ml-24 mr-4 lg:mr-48  lg:flex lg:flex-col items-center'>
        <h3 className='font-sweetsanspro text-[9px] xl:text-[11px] whitespace-pre-line lg:whitespace-normal text-center '>
          {line1}
          <span className='sm:block xl:inline'> {line2}</span>
        </h3>
      </div>
    </footer>
    )
}

export default Footer