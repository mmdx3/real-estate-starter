import React from 'react';

const Header = () => {
  return (
    <>
      <header className='flex justify-between container mx-auto py-4 xl:px-20 border-b-2 border-gray-100 items-center'>
        <div className=''>
          <h1 className='font-bold '>HomeLand.</h1>
        </div>
        <div className='flex w-[140px] justify-between items-center ' >
          <div className='cursor-pointer'>Log in</div>
          <div className='bg-violet-700  text-center items-center py-[6px] px-2 text-white font-bold rounded-md cursor-pointer hover:bg-violet-800 transition active:scale-[0.9]'>Sign up</div>
        </div>
      </header>
    </>
  )
  
  ;
};

export default Header;
