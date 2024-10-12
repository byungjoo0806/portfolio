import React from 'react';

type Props = {}

const Intro = (props: Props) => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center relative'>
        <p className='font-roboto text-lg animate-bounce'>connecting the blocks,</p>
        <p className='font-roboto text-lg animate-bounce'>connecting the world</p>
        <div className='w-0 h-0 animate-fade border-t-black border-l-transparent border-r-transparent border-b-transparent border-8 absolute bottom-60'></div>
        <div className='w-0 h-0 animate-fade border-t-black border-l-transparent border-r-transparent border-b-transparent border-8 absolute bottom-40'></div>
        <div className='w-0 h-0 animate-fade border-t-black border-l-transparent border-r-transparent border-b-transparent border-8 absolute bottom-20'></div>
    </div>
  )
}

export default Intro;