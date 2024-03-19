import { Hero } from '../components/common'
import { IoLogoGithub } from 'react-icons/io'
import { TfiEmail } from 'react-icons/tfi'
import { useState, useRef, useEffect } from 'react'

const Profile = () => {
    const [isVisible, setIsVisible] = useState(false)
    const animatedElementRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.5 },
        )

        if (animatedElementRef.current) {
            observer.observe(animatedElementRef.current)
        }

        return () => {
            if (animatedElementRef.current) {
                observer.unobserve(animatedElementRef.current)
            }
        }
    }, [])

    return (
        <div
            ref={animatedElementRef}
            className={`flex flex-col md:flex-row items-center justify-between gap-[38px] transition-opacity duration-1000 ease-in-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div className="w-[280px] md:w-[28%] ">
                <img
                    src="./profile_pic.jpeg"
                    aria-hidden
                    alt="profile image"
                    className="w-[100vw] m-auto rounded-full border-2 border-slate-500"
                />
            </div>
            <div className="w-[100%] box-border md:w-[70%] md:p-[10px] flex flex-col items-center">
                <Hero>
                    Byungjoo Park <span className="text-[20px] text-slate-400 font-normal pl-[10px]">Andy</span>
                </Hero>
                <p className="text-slate-700 pt-[5px] md:text-[24px] md:pt-[10px] text-[16px]">
                    Blockchainer 3.0
                </p>
                <p className="flex flex-col text-[16px] items-left pt-[7px] md:pt-[5px] md:text-[14px]">
                    <a href="mailto:andybyungjoopark@gmail.com" className="flex items-center gap-[5px] text-slate-600">
                        <TfiEmail />
                        andybyungjoopark@gmail.com
                    </a>
                    <a
                        href="https://github.com/byungjoo0806"
                        className="flex items-center gap-[5px] text-slate-600"
                    >
                        <IoLogoGithub />
                        byungjoo0806
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Profile
