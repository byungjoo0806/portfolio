import React, { useEffect } from 'react';
import anime from 'animejs';

type Props = {}

const Banner = (props: Props) => {
    const animateText = () => {
        anime.timeline({loop: true})
            .add({
                targets: '.ml2 .letter',
                scale: [4,1],
                opacity: [0,1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 950,
                delay: (el, i) => 70 * i
            }).add({
                targets: '.ml2',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1000
            });
    };

    useEffect(()=>{
        animateText();
    },[]);

    return (
        <div className='w-full md:w-[60%] h-32 text-2xl flex flex-col justify-center items-center mt-5'>
            <div className='ml2 w-[30%] h-10 ml-10'>
                <span className='letter'>D</span>
                <span className='letter'>a</span>
                <span className='letter'>i</span>
                <span className='letter'>l</span>
                <span className='letter'>y</span>
            </div>
            <div className='ml2 w-[30%] h-10 ml-16'>
                <span className='letter'>D</span>
                <span className='letter'>i</span>
                <span className='letter'>a</span>
                <span className='letter'>r</span>
                <span className='letter'>y</span>
            </div>
        </div>
    )
}

export default Banner;