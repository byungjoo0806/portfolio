import React from 'react';

type Props = {}

const Faceimg = (props: Props) => {
  return (
    <div className='w-32 h-32 rounded-full overflow-hidden'>
        <img className='w-full h-full' src="./profile_pic.png" alt="profile pic" />
    </div>
  )
}

export default Faceimg;