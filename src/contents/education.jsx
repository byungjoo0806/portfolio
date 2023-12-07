import { FaExternalLinkAlt } from 'react-icons/fa';
import { Heading, Wrapper } from '../components/common'

const Education = () => {
    return (
        <Wrapper>
            <Heading>
                Education
            </Heading>

            <ul className="flex flex-col w-full gap-[120px]">
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src="./kga.png"
                            className="w-full"
                            alt="KGA"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-col items-center md:items-start">
                            <li className="text-[16px]">Kyungil Game Academy</li>
                            <li className="text-[16px]">Bootcamp</li>
                            <li className="text-stone-500">2023. 02. 27 ~ 2023. 12. 11</li>
                            <li>frontend</li>
                            <li>backend</li>
                            <li>deploy</li>
                            <li>blockchain</li>
                        </ul>
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

                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src="./uva-logo.jpg"
                            className="w-full"
                            alt="UVa"
                        />
                    </div>
                    <div className="w-full">
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
