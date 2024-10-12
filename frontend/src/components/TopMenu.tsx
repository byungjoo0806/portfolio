import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const TopMenu = (props: Props) => {
    const navigate = useNavigate();

    const jumpPages = (path: string) => {
        navigate(`/${path}`);
    };

    return (
        <div className='w-full h-12 flex flex-row justify-center items-center divide-x shadow-lg bg-white font-roboto'>
            <div className='w-1/2 md:w-[10%] h-full flex justify-center items-center hover:cursor-pointer' onClick={()=>jumpPages("")}>portfolio</div>
            <div className='w-1/2 md:w-[10%] h-full flex justify-center items-center hover:cursor-pointer' onClick={()=>jumpPages("blog")}>blog</div>
        </div>
    )
}

export default TopMenu;