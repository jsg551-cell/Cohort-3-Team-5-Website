import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-center justify-center mx-5 sm:max-xl:mx-20 xl:mx-30 2xl:mx-80'>
        <footer className='bg-gradient-to-b from-[rgb(99,128,185)] to-[#7a44b7b2] w-full rounded-t-lg text-center py-4 max-lg:mt-0 lg:mt-2 '>
            <p className='text-white w-full max-lg:text-xs lg:text-sm'>Website originally made by <span className='font-serif'>Arnav Jamidar</span> and later extended by <span className='font-serif'>Matt Ritchie</span></p>
        </footer>
    </div>
  )
}

export default Footer