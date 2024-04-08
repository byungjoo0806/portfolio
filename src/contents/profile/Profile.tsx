import React from 'react';
import Faceimg from './Faceimg';
import PersonalInfo from './PersonalInfo';

type Props = {}

const Profile = (props: Props) => {
  return (
    <div className='w-full mt-5 md:w-[60%] flex flex-col md:flex-row justify-center items-center z-10'>
        <Faceimg />
        {/* {<PersonalQuote />} */}
        <PersonalInfo />
    </div>
  )
}

export default Profile;