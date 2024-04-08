import { FaExternalLinkAlt } from 'react-icons/fa';
import { Wrapper } from '../../components/Common'
import { TiHtml5 } from 'react-icons/ti';
import { SiAmazonec2, SiCss3, SiJavascript, SiSolidity, SiTypescript } from 'react-icons/si';
import { DiGithubBadge, DiNodejs } from 'react-icons/di';

const Education = () => {
    return (
        <Wrapper>
            <br/>
            <ul className="w-full flex flex-col justify-around">
                <li className="flex flex-col gap-[32px] md:flex-row pb-5">
                    <div className="w-full md:w-[420px]">
                        <div className='w-full flex justify-center items-center bg-white'>
                            <img
                                src="./kga.png"
                                className="w-[50%] md:w-full"
                                alt="KGA"
                                />
                        </div>
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-col items-center md:items-start">
                            <li className="text-[16px]">Kyungil Game Academy</li>
                            <li className="text-[16px]">Bootcamp</li>
                            <li className="text-stone-500">2023. 02. 27 ~ 2023. 12. 11</li>
                        </ul>
                        <h3 className="py-[16px] text-[16px] font-bold">Tech Stack</h3>
                        <div className="flex flex-col justify-center text-[32px] gap-[8px] py-[8px] px-[5px]">
                            <div className='flex flex-row gap-[5px] mb-[5px]'>
                                <TiHtml5 />
                                <SiCss3 />
                                <SiJavascript />
                                <SiTypescript />
                            </div>
                            <div className='flex flex-row gap-[5px] mb-[5px]'>
                                <DiNodejs />
                                <SiAmazonec2 />
                                <DiGithubBadge />
                            </div>
                            <div className='flex flex-row gap-[5px]'>
                                <SiSolidity />
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            Blockchain Financial Technology & Application Software Developer{' '}
                            <a href="https://bouncesto.site">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">

                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">About the bootcamp</h3>
                        <div className="leading-8 text-[12px] md:text-[16px]">
                            I completed a comprehensive web programming course for non-computer-science-majors. <br/>
                            Starting from the most basics of HTML, CSS, and Javascript, 
                            I learned backend development using Node.js, frontend development using React, 
                            databases management using MySQL, and establishing / deploying servers through AWS EC2. 
                            Also, I got to stack knowledge on building ERC20 tokens and ERC721 NFTs with Typescript, 
                            building Dapp with Web3, and creating and deploying smart contracts in Solidity. <br/>
                            Throughout the course of 9 months, I participated in 4 different team projects 
                            and was able to build and get used to collaborating with others.
                        </div>
                    </div>
                </li>

                <li className="flex flex-col gap-[32px] md:flex-row pt-5 pb-5 border-t border-gray-400 ">
                    <div className="w-full md:w-[420px] flex justify-center items-center">
                        <img
                            src="./uva-logo.jpg"
                            className="w-[50%] md:w-full"
                            alt="UVa"
                        />
                    </div>
                    <div className="w-full flex flex-col justify-center items-center md:justify-normal md:items-start">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            University of Virginia
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            Bachelor's of Science - Astronomy-Physics
                        </p>

                        <p className="text-slate-400">
                            2016. 08 ~ 2022. 08
                        </p>
                    </div>
                </li>
            </ul>
        </Wrapper>
    )
}

export default Education;
