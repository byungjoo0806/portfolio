import { Wrapper } from '../../components/Common'
import { SiTypescript, SiJavascript, SiExpress, SiReact, SiSolidity } from 'react-icons/si'

const Skills = () => {
    return (
        <Wrapper>
            <br/>
            <ul className="flex flex-col divide-y divide-gray-400">
                <li className="flex flex-row gap-[32px] py-[32px">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        Language
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiJavascript />
                                <span className="md:w-[120px]">Javascript</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>
                                    able to declare variables and understand the differences
                                    between var,let, and const
                                </li>
                                <li>
                                    able to debug through checking the logs in console
                                </li>
                                <li>
                                    able to use if statement, map function, and for loop depending on cases
                                </li>
                                <li>
                                    able to use methods related to string and array type data
                                </li>
                                <li>
                                    understand call stack and hoisting
                                </li>
                            </ul>
                        </li>

                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiTypescript />
                                <span className="md:w-[120px]">Typescript</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[31px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>
                                    able to set specific types to variables and interface for objects (avoids "any" type as much as possible)
                                </li>
                                <li>
                                    want to get professional in usage of class components
                                </li>
                                <li>
                                    able to use p5.js to add different animations (still learning)
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        frontend
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiReact />
                                <span className="md:w-[120px]">React</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>
                                    have worked on multiple projects (team and personal) through CRA
                                </li>
                                <li>
                                    able to organize the directories for projects : components, contents, layout, pages, etc.
                                </li>
                                <li>
                                    want to be professional at creating and using higher-order components
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        backend
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiExpress />
                                <span className="md:w-[120px]">Express</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[29px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>
                                    able to create and connect with databases through MySQL using Sequelize library for Node.js
                                </li>
                                <li>
                                    able to deploy projects through AWS EC2
                                </li>
                                <li>
                                    want to learn how to deploy projects using S3 and Amplify
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        contract
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiSolidity />
                                <span className="md:w-[120px]">Solidity</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[29px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>
                                    able to use contract libraries of Open Zeppelin (ERC20,ERC721) 
                                    to deploy tokens, mint NFTs, and create voting pools
                                </li>
                                <li>
                                    want to study ERC4337 that allows account abstraction and provides paymaster API
                                    that can be used for voting
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </Wrapper>
    )
}

export default Skills
